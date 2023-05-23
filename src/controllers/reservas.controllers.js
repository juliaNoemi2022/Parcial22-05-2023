const { json } = require('body-parser')
const reservas = require('../../data/reservas.json')


const getAllReservas = (req, res)=>{
    res.status(200).json(reservas)
}

const getRersevasById = (req , res)  =>{
    const id = req.params.id
    const idBuscado = reservas.find( reserva => reserva.id == id)
    if(idBuscado){
        res.status(200).json(idBuscado)
    }else{
        res.status(404).json({mensaje: `La reservada con número de id ${id} no fue encontrada`})
    }

}

const deleteReservaById =(req , res) =>{
    const id = req.params.id
    const indice = reservas.findIndex( reserva => reserva.id == id)
    if(indice == -1){
        res.status(404).json({
            indice: "la operación de borrado no pudo ser efectuada",
            mensaje: `La reserva con id ${id} no pudo ser encontrada`
        })
    }else{
        const reserva = reservas[indice];
        const borrado = reservas.splice(indice, 1)
        res.status(200).json({
            borrado: "se pudo eliminar la reserva correctamente",
            reserva: reserva
        })
    }
}

const addNuevaReserva = (req, res)=>{
   
   
        const ids = reservas.map( id =>id.id)
        const maxId = reservas.length > 0 ? Math.max(...ids) + 1 : 1
        reservas.push( {
                    id: maxId,
                    cliente: req.body.cliente,
                    cantPersonas: req.body.cantPersonas,
                    distancia: req.body.distancia,
                    fecha: req.body.fecha
                                
        })
        res.status(201).json(reservas[reservas.length - 1])
    
   
}


    

module.exports =
 {
    getAllReservas,
    getRersevasById,
    deleteReservaById,
    addNuevaReserva                  
}