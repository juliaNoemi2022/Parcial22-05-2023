const express = require('express')
const vehiculosController = require('../controllers/vehiculos.controllers')

const router = express.Router()



router.get('/', vehiculosController.getAllVehiculos)
/*
router.get('/:id',)
router.delete('/:id', )
router.post('/', )*/

module.exports = { router}