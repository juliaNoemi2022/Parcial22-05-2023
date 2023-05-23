const express = require('express')
const vehiculosController = require('../controllers/vehiculos.controllers')

const router = express.Router()



router.get('/', vehiculosController.getAllVehiculos)

router.get('/: patente', vehiculosController.getVehiculoByPatente)

router.put('/: patente', vehiculosController.modificarDatosVehiculo)

router.post('/', vehiculosController.createNewVehiculo)

module.exports = { router}