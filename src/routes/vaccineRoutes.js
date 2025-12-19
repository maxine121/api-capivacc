const express = require('express')
const router = express.Router()
const authorizeRole = require('../middlewares/authorizeRole');

const {createVaccineController, getAllVaccinesController, updateVaccineByIdController, deleteVaccineByIdController} = require('../controllers/vaccineControllers')

router.post("/", authorizeRole(['admin']), createVaccineController)
router.get("/", authorizeRole(['admin', 'user']), getAllVaccinesController)
router.put("/:id", authorizeRole(['admin']), updateVaccineByIdController)
router.delete("/:id", authorizeRole(['admin']), deleteVaccineByIdController)


module.exports = router
