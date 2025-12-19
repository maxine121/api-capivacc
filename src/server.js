//environment variables setup
require('dotenv').config();

//importing app
const app = require('./app');

//server setup
const PORT = process.env.PORT || 3000;

//starting server
app.listen(PORT, () =>{
    console.log(`Server running successfully on port ${PORT}`);
    console.log(`Acesse em http://localhost:${PORT}`);
})
