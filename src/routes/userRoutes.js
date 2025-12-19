const express = require('express')
const router = express.Router()
const authorizeRole = require('../middlewares/authorizeRole');

const { getUserController, updateUserController } = require('../controllers/userControllers')

router.get('/', authorizeRole(['user', 'admin']), getUserController)
router.put('/', authorizeRole(['user', 'admin']), updateUserController), 

module.exports = router