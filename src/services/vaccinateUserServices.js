const prisma = require('../config/prismaClient');
const AppError = require('../utils/appError');

const createVaccinatedUserService = async (adminId, data) =>{

    if(!adminId || !data.usuarioId || !data.vacinaId || !data.dataAplicacao){
        throw new AppError('Dado obrigatorios ausentes no service de criar vacinacao', 400, 'VACCINATED_ERR');
    }

    const result = await prisma.$transaction(async (tx) =>{

        const vaccinatedUser = await tx.vacinacaoUsuario.create({
            data:{
                dataAplicacao: new Date(data.dataAplicacao),
                localAplicacao: data.localAplicacao,

                usuarioId: Number(data.usuarioId), 
                vacinaId: Number(data.vacinaId),
                adminId: Number(adminId)
                //capibas serao adicionadas automaticamente pelo default
            },
            include: {
                usuario: { select: { nome: true, cpf: true } },
                vacina: { select: { nome: true } }
            }
        })

        const capibasToIncrement = vaccinatedUser.earnedCapibas;

        await tx.usuario.update({
            where:{
                id: vaccinatedUser.usuarioId
            },
            data:{
                saldoCapibas:{
                    increment: vaccinatedUser.earnedCapibas
                }
            }
        })

        return vaccinatedUser;
    })

    return result;

}

module.exports={
    createVaccinatedUserService
}