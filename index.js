const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config() //Manejo de variables de entorno en el archivo .env

//Importar el archivo de las rutas 
const employeesRoutes = require('./routes/employees')

const app = express()
const port = process.env.PORT || 3200

// Middleware para json 
app.use(express.json())

// Middleware para formulario
app.use(express.urlencoded({ extended: true }))

// Middleware para rutas 
app.use('/api', employeesRoutes);
//cors
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hola, desde API REST")
})

const tableRoutes = require('./routes/table');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const employeeRoutes = require('./routes/employees');

//Rutas
app.use('/api', tableRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', orderRoutes);
app.use('/api', employeeRoutes);
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Concetando a la base de datos de Mongo Atlas"))
    .catch(() => console.error("Error de conexion a la base de datos"))
app.listen(port, () => {
    console.log(`Servidor inicado en http://localhost:${port}`)
})

