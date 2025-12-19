const AppError = require("../utils/appError");

const authorizeRole = (allowedRoles) => {

    return (req, res, next) =>{

        const userRole = req.user.role;

        if (!userRole){
            return next(
                new AppError('Role do usuario nao encontrado no token', 403, 'ROLE_NOT_FOUND')
            )
        }

        if (!allowedRoles.includes(userRole)){
            return next(
                new AppError('Acesso negado. Role do usuario nao autorizado', 403, 'ROLE_NOT_AUTHORIZED')
            )
        }

        next()
    }
}

module.exports = authorizeRole;