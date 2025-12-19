const prisma = require('../config/prismaClient');
const AppError = require('../utils/appError');

const getUserService = async (userId) =>{ //buscar no banco dado de dados nome, email, telefone, cpf

    const userData = await prisma.usuario.findUnique({
        select:{
            cpf: true,
            nome: true,
            email: true,
            bairro: true,
            id: true,
            role: true
        },
        where:{
            id: userId
        }
    })

    if (!userData){
        throw new AppError('Usuario nao encontrado', 404, 'USER_NOT_FOUND');
    }

    return userData;

}

const updateUserService = async(userId, updates) =>{

    if (updates.email) {

        const emailExists = await prisma.usuario.findUnique({
            where: { email: updates.email }
        });

        if (emailExists && emailExists.id !== userId) {
            throw new AppError("Este e-mail já está em uso.", 400);
        }
    }

    const updatedUser = await prisma.usuario.update({
        where: { id: userId },
        data: {
            nome: updates.nome,
            email: updates.email,
            bairro: updates.bairro
        }
    });

    return updatedUser;
}

module.exports = {
    getUserService,
    updateUserService
}