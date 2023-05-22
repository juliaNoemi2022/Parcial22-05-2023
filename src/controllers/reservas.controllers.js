const reservas = require('../../data/reservas.json')
/*const vehiculos = require('../../data/vehiculos.json')*/

const getAllReservas = (req, res)=>{
    res.status(200).json(reservas)
}

/*const getProductoById = (req, res) => {
    const id = req.params.id
    const idx = productos.findIndex( prod => prod.idProducto==id)
    if (idx >= 0) {
        const idxtp = tipoProducto.findIndex(
            tp => tp.idTipoProducto==productos[idx].idTipoProducto && tp.enabled)
        if (idxtp>=0) {
            const producto = productos[idx]
            const tipo = tipoProducto[idxtp]
            delete producto.idTipoProducto
            delete tipo.enabled 
            res.status(200).json({...producto, tipo})

        } else {
            res.status(404).json({mensaje: `No se encontro o esta deshabilitado el tipo de Producto asociado ${productos[idx].idTipoProducto}`})
        }

    } else {
        res.status(404).json({mensaje: `No se encontrol el producto ${id}`})
    }
}

const postProducto = (req, res) => {
    const bodyRecibido = req.body
    const idxtp = tipoProducto.findIndex(
        tp => tp.idTipoProducto==bodyRecibido.idTipoProducto && tp.enabled)
    if ( idxtp >=0 ) {
        let maxId = 1
        if ( productos.length > 0 ) {
            const idsProducto = productos.map(p => p.idProducto)
            maxId = Math.max(...idsProducto) + 1
        }
        const producto= {
            idProducto: maxId,
            descripcion: bodyRecibido.descripcion,
            stock: bodyRecibido.stock,
            idTipoProducto: bodyRecibido.idTipoProducto
        }
        productos.push (producto)
        res.status(201).json(producto)
    } else {
        res.status(400).json({mensaje:`Error de el codigo de tipo de producto. No existe el codigo ${bodyRecibido.idTipoProducto}`})
    }
}*/
module.exports = {getAllReservas /*getProductoById, postProducto*/}