const express = require('express')
const reservasController = require('../controllers/reservas.controllers')

const router = express.Router()



router.get('/', reservasController.getAllReservas)


module.exports = { router}

