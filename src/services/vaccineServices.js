const prisma = require('../config/prismaClient');
const AppError = require('../utils/appError');

const formatarTitleCase = (texto) => {
  if (!texto) return null;

  return texto
    .toLowerCase() // Garante que tudo comece minusculo
    .split(' ')    //Quebra em array de palavras
    .map(palavra => {
      //Pega a 1ª letra maiuscula + o resto da palavra
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    })
    .join(' ');//Junta tudo de volta com espaços
}

const createVaccineService = async (vaccineName, adminId) =>{

    const vaccineNameFormated = formatarTitleCase(vaccineName);

    if (!vaccineNameFormated){
        throw new AppError('vaccineName é obrigatorio', 500, 'VACCINE_NOT_CREATED')
    }

    const vaccineNameAlreadyExists = await prisma.vacina.findFirst({
        where:{nome: vaccineNameFormated}
    })

    if (vaccineNameAlreadyExists){
        throw new AppError('Já existe uma vacina com esse nome', 500, 'ALREADY_EXISTS')
    }
    
    const createdVaccine = await prisma.vacina.create({
        data:{
            nome: vaccineNameFormated,
            adminId: adminId
        }
    })

    if (!createdVaccine){
        throw new AppError('Erro ao criar vacina', 500, 'VACCINE_NOT_CREATED')
    }

    return createdVaccine
}

const getAllVaccinesService = async() =>{
    const allVaccines = await prisma.vacina.findMany()
    
    const objectToReturn = {
        vaccines: allVaccines,
        quantity_vaccines: allVaccines.length
    }

    return objectToReturn

}

const updateVaccineByIdService = async(vaccineId, newVaccineName) =>{

    if(!vaccineId || !newVaccineName){
        throw new AppError('Argumentos faltando', 500, 'MISSING_ARGUMENTS')
    }

    const newVaccineNameFormated = formatarTitleCase(newVaccineName);

    const updatedVaccine = await prisma.vacina.update({
        where: {id: vaccineId},
        data:{
            nome: newVaccineNameFormated
        }
    })

    if(!updatedVaccine){
        throw new AppError('Erro ao atualizar vacina', 500, 'UPDATE_ERROR')
    }

    return updatedVaccine
}

const deleteVaccineByIdService = async(vaccineId) =>{

    if(!vaccineId){
        throw new AppError('id da vacina é obrigatorio', 500, 'MISSING_ID')
    }

    const deletedVaccine = await prisma.vacina.update({
        where: {id: vaccineId},
        data:{
            ativo: false
        }
    })

    if (!deletedVaccine){
        throw new AppError('Erro ao deletar vacina', 500, 'DELETE_ERROR')
    }

    return deletedVaccine
}

module.exports = {
    createVaccineService,
    getAllVaccinesService,
    updateVaccineByIdService,
    deleteVaccineByIdService
}