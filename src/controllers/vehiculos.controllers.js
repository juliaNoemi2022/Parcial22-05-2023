const vehiculos = require('../../data/vehiculos.json')


const getAllVehiculos = (req, res)=>{
    res.status(200).json(vehiculos)
}

const getVehiculoByPatente = (req , res)  =>{
    const patente = req.params.patente
    const patenteBuscada = vehiculos.find( auto => auto.patente == patente)
    if(patenteBuscada){
        res.status(200).json(patenteBuscada)
    }else{
        res.status(404).json({mensaje: `El vehículo con patente  número  ${patente} no fue encontrada`})
    }

}

const modificarDatosVehiculo = (req , res) =>{
    const patente= req.params.patente
    const vehiculoModificado = req.body
    const indice = vehiculos.findIndex( v=> v.patente == patente)
    if(indice >= 0){
      vehiculos[indice].capacidad = req.body.capacidad,
      vehiculos[indice].habilitado =true,
      vehiculos[indice].autonomiaKms= req.body.autonomiaKms
       res.status(201).json({ vehiculo: vehiculos[indice]})
    }
        res.status(404).json({
            resultado: "La operacion no pudo ser realizada",
            mensaje: `El vehículo  con patente ${patente} no fue encontrado`
        
    })
}


       
}
      

const createNewVehiculo =  (req, res)=>{
    const patenteRecibido = req.body.patente
    const patente = vehiculo.findIndex(
        v => v.patente== patenteRecibido.patente && habilitado== true && capacidad >=1 && capacidad<10)
    if(patente >=0 ) {
        
        const vehiculo= {
            habilitado: true,
            capacidad: req.body.capacidad,
            autonomiaKms: req.body.autonomiaKms
           
        }
        productos.push (vehiculo)
        res.status(201).json(vehiculo)
    } else {
        res.status(400).json({mensaje:`Error en el numero de patente. La patente no existe ${patenteRecibido.patente}`})
    }
}


    
    
      
      


module.exports =
 {
    getAllVehiculos,
    getVehiculoByPatente,
    modificarDatosVehiculo , 
    createNewVehiculo 
}