const reservas = require('../../data/reservas.json')


const getAllReservas = (req, res)=>{
    res.status(200).json(reservas)
}


module.exports = {getAllReservas }