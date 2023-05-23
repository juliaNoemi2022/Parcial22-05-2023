const express = require('express')
const reservasController = require('../controllers/reservas.controllers')

const router = express.Router()



router.get('/', reservasController.getAllReservas)
router.get('/:id', reservasController.getRersevasById)
router.delete('/:id', reservasController.deleteReservaById)


module.exports = { router}

