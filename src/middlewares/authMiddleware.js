const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) =>{

    const token = req.cookies.access_token;

    if (!token || token.trim() === ''){
        return res.status(401).json({message: "Acesso negado. Token nao fornecido"})
    }

    try{

        const validToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = validToken; //anexa os dados do usuario ao objeto de requisicao
        next()
        
    }catch(err){
        console.error("Erro na verificacao do token JWT: ", err)
        return res.status(403).json({message: "Token invalido ou expirado"})
    }
}

module.exports = authMiddleware;