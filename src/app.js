//dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes');
const vaccineRoutes = require('./routes/vaccineRoutes')
const vaccinateUserRoutes = require('./routes/vaccinateUserRoutes')

//middlewares
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

//app initialization
const app = express();

//middlewares setup
app.use(express.json());
app.use(cookieParser());

//methods and headers setup for CORS
app.use(cors({
    origin: function (origin, callback){
        if (!origin) return callback(null, true);
        // Em desenvolvimento, aceita qualquer um que pedir
        callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'ngrok-skip-browser-warning'
    ],
    credentials: true
}))

app.get('/', (req, res) => {return res.status(200).json({message: "Get para a raiz da API. Funcionando!"})});
app.post('/api/auth/verify-token', authMiddleware, (req, res) => {return res.status(200).json({message: "Token válido!"})});

app.use('/api/auth', authRoutes)
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/vaccine', authMiddleware, vaccineRoutes)
app.use('/api/vaccinate-user', authMiddleware, vaccinateUserRoutes)

app.use(errorMiddleware)




module.exports = app;