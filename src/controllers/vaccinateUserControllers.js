const { config } = require("zod");
const AppError = require("../utils/appError");
const {createVaccinatedUserService} = require("../services/vaccinateUserServices")


const createVaccinatedUserController = async (req, res) =>{
    try{
        //"adminId": 2
        //"usuarioId": 10,
        //"vacinaId": 2,
        //"dataAplicacao": "2025-12-17T14:30:00.000Z",
        //"localAplicacao": "Parque da Jaqueira"

        const adminId = req.user.userId;

        const { usuarioId, vacinaId, dataAplicacao, localAplicacao} = req.body;

        const vaccinatedUser = await createVaccinatedUserService(adminId, {usuarioId, vacinaId, dataAplicacao, localAplicacao});

        return res.status(201).json({message: "Novo usuario vacinado criado com sucesso!", vaccinatedUser});

    }catch(error){

        if (error instanceof AppError){
            console.log(error);
            return res.status(error.statusCode).json({message:error.message})
        }

        return res.status(500).json({message: "Erro ao criar uma nova vacina para um usuario"})
    }
}

module.exports={
    createVaccinatedUserController
}
