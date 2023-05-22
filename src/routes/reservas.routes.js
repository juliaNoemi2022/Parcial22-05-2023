const express = require('express')
const reservasController = require('../controllers/reservas.controllers')

const router = express.Router()



router.get('/',reservasController.getAllReservas)
/*router.get('/:dni', alumnosController.getAlumnoByDni)
router.delete('/:dni',alumnosController.deletealumnoByDni) 
router.post('/', alumnosController.createAlumno)
router.put('/:dni', alumnosController.updateAlumno )*/

module.exports = { router}

