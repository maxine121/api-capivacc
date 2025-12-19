const AppError = require("../utils/appError");
const {getUserService, updateUserService} = require("../services/userServices")

const getUserController = async (req, res) =>{
    try{

        const userId = req.user.userId;

        const userData = await getUserService(userId);

        return res.status(200).json(userData);

    }catch(error){

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        console.error('Erro ao obter dados do usuario', error);

        return res.status(500).json({message:"Erro ao obter dados do usuario"});

    }
}

const updateUserController = async (req, res) =>{
    try{

        userId = req.user.userId;

        const {nome, email, bairro} = req.body;

        const updateUser = await updateUserService(userId, {nome, email, bairro})

        return res.status(200).json({message: "Usuario atualizado com sucesso"});

    }catch(error){
        
        if (error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }

        console.error('Erro ao atualizar dados do usuario', error)

        return res.status(500).json({message: "Erro ao atualizar dados do usuario"})
    }
}

module.exports = {
    getUserController,
    updateUserController
}