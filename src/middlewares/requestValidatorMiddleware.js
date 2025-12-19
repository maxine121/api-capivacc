const {ZodError} = require('zod');

const validate = (schema) => (req, res, next) =>{
    try{

    }catch(error){
        console.log(error);

        if (error instanceof ZodError){
            
        }
    }
}

//FALTA TERMINAR ISSO MAS TALVEZ N DE TEMPO