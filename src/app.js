const express = require('express');
const app = express()
const PORT = process.env.PORT || 3002;
const reservasRouter = require('./routes/reservas.routes')
const vehiculosRouter = require('./routes/reservas.routes')

app.use(express.json()) // Me permite trabajar con archivos json en los Post más que nada
app.use('/reservas',reservasRouter.router)
/*app.use('/vehiculos', vehiculosRouter.router)*/


app.listen(PORT, ()=>{console.log(`App lista escuchando en el puerto ${PORT}`)})