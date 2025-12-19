const AppError = require("../utils/appError");
const {createVaccineService, getAllVaccinesService, updateVaccineByIdService, deleteVaccineByIdService} = require("../services/vaccineServices")

const createVaccineController = async (req, res) =>{
    try{

        const {nome} = req.body;
        const adminId = req.user.userId;

        const createdVaccine = await createVaccineService(nome, adminId)

        return res.status(200).json({message: "Vacina cadastrada com sucesso!"})

    }catch(error){

        if (error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message});
        }

        console.log('Erro ao criar nova vacina', error);

        return res.status(500).json({message: "Erro ao criar nova vacina"});

    }
}

const getAllVaccinesController = async (req, res) =>{
    try{

        const allVaccines = await getAllVaccinesService();

        return res.status(200).json(allVaccines)
        
    }catch(error){
        if (error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }

        console.log("Erro ao retornar todas as vacinas cadastradas", error)

        return res.status(500).json({message: "Erro ao retornar todas as vacinas cadastradas"})
    }
}

const updateVaccineByIdController = async (req, res) =>{
    try{

        const { id } = req.params;
        const {nome} = req.body;

        const vaccineIdNumber = Number(id)

        const updatedVaccineById = await updateVaccineByIdService(vaccineIdNumber, nome)

        return res.status(200).json({message: "Vacina atualizada com sucesso"})

    }catch(error){

        if (error instanceof AppError){
            return res.status(error.statusCode).json({message:error.message})
        }

        console.log("Erro do atualizar a vacina", error)

        return res.status(500).json({message: "Erro do atualizar a vacina"})
    }
}

const deleteVaccineByIdController = async (req, res) =>{
    try{

        const { id } = req.params;

        console.log(`id que chegou no controller: ${id}`)

        const vaccineIdNumber = Number(id)

        const vaccineToDeleteById = await deleteVaccineByIdService(vaccineIdNumber)

        return res.status(200).json({message: "Vacina deletada com sucesso"})

    }catch(error){

        console.log("Erro ao deletar vacina por id", error);

        if (error instanceof AppError){
            return res.status(error.statusCode).json({message:error.message})
        }

        return res.status(500).json({message: "Erro ao deletar vacina por id"})
    }
}

module.exports = {
    createVaccineController,
    getAllVaccinesController,
    updateVaccineByIdController,
    deleteVaccineByIdController
}
