const {loginService} = require("../services/authServices");
const AppError = require("../utils/appError");

const loginController = async (req, res) =>{

    try{
        const {username, password} = req.body;

        const {localToken, userRole} = await loginService(username, password);

        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie("access_token", localToken, {
            httpOnly: true,
            secure: isProduction ? true : false,
            sameSite: isProduction ? 'strict' : 'lax',
            maxAge: 1000 * 60 * 60 * 3 // expira em tres horas
        });


        return res.status(200).json({message: "Logado com sucesso!", role: userRole})

    }catch(error){

        console.error(error);

        if (error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }

        return res.status(500).json({message: "Erro interno ao logar"})

    }

}

const logoutController = async (req, res) =>{
    try{

        const isProduction = process.env.NODE_ENV === 'production';

        // Limpa o cookie "access_token"
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
        });

        return res.status(200).json({ message: "Logout realizado com sucesso!" });
        
    }catch(error){
        if (error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }

        return res.status(404).json({message: "Erro ao fazer logout"})
    }
}

module.exports = {
    loginController,
    logoutController
}