const jwt = require('jsonwebtoken');
const axios = require('axios');
const AppError = require('../utils/appError');
const prisma = require('../config/prismaClient');


const generateLocalToken = (userId, userRole) =>{

    const payLoad = {
        userId: userId,
        role: userRole
    }

    return jwt.sign(payLoad, process.env.JWT_SECRET, {
        expiresIn: '3h'
    });
}

const CONECTA_RECIFE_AUTH_URL = 'https://loginteste.recife.pe.gov.br/auth/realms/recife/protocol/openid-connect/token';

const ConectaRecifeApiLogin = async (cpf, password) =>{
 
    try{

        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', cpf);
        params.append('password', password);
        params.append('client_id', 'app-recife');

        const authData = await axios.post(CONECTA_RECIFE_AUTH_URL, params, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const conectaToken = authData.data.access_token

        if (authData.data && conectaToken){

            return conectaToken;
        }

        return null;

    }catch(error){

        if (error.response) {
            console.log("STATUS DA RESPOSTA:", error.response.status);
            console.log("DADOS DO ERRO (O QUE O KEYCLOAK DISSE):", error.response.data);
        }

        if(error.response && (error.response.status === 401 || error.response.status === 400)){
            console.error("Falha na autenticação: Credenciais inválidas")
            return null;
        }

        console.error("Erro na comunicação com o Conecta Recife API:", error.message);

        throw new AppError('Servico de login externo indisponível', 503, 'EXTERNAL_AUTH_SERVICE_ERROR');
    }

}

const loginService = async (cpf, password) =>{

    //como os caras do conecta recife nao salvaram um usuario admin, vou deixar mockado

    let conecta_recife_nome;
    let conecta_recife_email;
    let conecta_recife_user_id;
    let conecta_recife_tipo_usuario;
    let conectaToken;

    const adminUser = { //ESSES DADOS SAO FALSOS, MOCKADOS APENAS PARA TESTE
        cpf: "11900545696",
        name: "Adam Sandler",
        email: "adamIClick@gmail.gov.sus.br",
        password: "myadmin123@",
        user_id: "bac095k8-b7a8-4b6d-890f-747a19c85a99",
        tipo_usuario: "admin",
        conectaToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }

    if(cpf == adminUser.cpf && password == adminUser.password){

        conecta_recife_nome = adminUser.name;
        conecta_recife_email = adminUser.email;
        conecta_recife_user_id = adminUser.user_id;
        conecta_recife_tipo_usuario = adminUser.tipo_usuario

    }else{ //caso nao seja o admin mockado
        conectaToken = await ConectaRecifeApiLogin(cpf, password);

        const decodedUser = jwt.decode(conectaToken);

        conecta_recife_nome = decodedUser.name
        conecta_recife_email = decodedUser.email
        conecta_recife_user_id = decodedUser.user_id
        conecta_recife_tipo_usuario = decodedUser.tipo_usuario

    
        if (!conectaToken){
            throw new AppError('Usuário ou senha inválidos', 401, 'INVALID_CREDENTIALS');
        }

    }

    let user;

    try{

        const userCpf = cpf

        user = await prisma.usuario.upsert({
            where: { cpf: userCpf }, 
            update: {
                updatedAt: new Date(),
                latestConectaToken: conectaToken,
                nome: conecta_recife_nome,
                email: conecta_recife_email,
                conecta_recife_id: conecta_recife_user_id,
                role: conecta_recife_tipo_usuario
            },
            create: {
                cpf: userCpf,
                latestConectaToken: conectaToken,
                nome: conecta_recife_nome,
                email: conecta_recife_email,
                conecta_recife_id: conecta_recife_user_id,
                role: conecta_recife_tipo_usuario
            }
        });
        }catch(dbError){
            console.error('Erro ao fazer upsert no banco de dados:', dbError);
            throw new AppError('Erro interno ao processar o usuário.', 500, 'DATABASE_ERROR');      
        }

        const userId = user.id

        const localToken = generateLocalToken(userId, conecta_recife_tipo_usuario)

        const userRole = user.role;

        return {localToken, userRole};
    
}

module.exports = {
    loginService,
}