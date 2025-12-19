const express = require('express')
const router = express.Router()
const authorizeRole = require('../middlewares/authorizeRole');

const {createVaccinatedUserController} = require('../controllers/vaccinateUserControllers');

//continuar CRUD vaccinateUser
router.post('/', authorizeRole(['admin']), createVaccinatedUserController)


module.exports = router