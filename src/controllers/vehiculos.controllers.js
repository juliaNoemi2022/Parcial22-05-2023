const vehiculos = require('../../data/vehiculos.json')


const getAllVehiculos = (req, res)=>{
    res.status(200).json(vehiculos)
}

module.exports =
 {
    getAllVehiculos                    
}