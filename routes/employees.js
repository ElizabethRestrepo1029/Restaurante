const express = require('express');
const cors = require('cors')
// importar el esquema de models
const employeesSchema = require('../models/employees');

const router = express.Router();
// Middleware
router.use(cors());
// Rutas
// Agregar empleado
router.post('/employees',cors(),(req, res)=>{
    const employees = employeesSchema(req.body);
    employees
        .save()
        .then((data) => res.json(data))
        .catch((error) =>res.json({message: error}))
})
// Recuperar todos los users
router.get('/employees',cors(),(req, res)=>{
   employeesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) =>res.json({message: error}))
})

// Recuperar user por id
router.get('/employees/:id',cors(),(req, res)=>{
    const { id } = req.params;
    employeesSchema
         .findById(id)
         .then((data) => res.json(data))
         .catch((error) =>res.json({message: error}))
 })
//Buscar por userneme
router.get('/employees/byusername/:username',cors(),async(req, res)=>{
    const { username } = req.params;
    await employeesSchema
          .findOne({username:username})
          .then(data => res.json(data))
          .catch(error => res.json(error))  
    });

 // Actualizar user por id
router.put('/employees/:id',cors(),(req, res)=>{
    const { id } = req.params;
    const {username,fullname, email,password, role} = req.body;
    employeesSchema
         .updateOne({_id:id},{$set: {username,fullname, email,password, role}})
         .then((data) => res.json(data))
         .catch((error) =>res.json({message: error}))
 })

  // Eliminar user por id
router.delete('/employees/:id',cors(),(req, res)=>{
    const { id } = req.params;
    employeesSchema
         .deleteOne({_id:id})
         .then((data) => res.json(data))
         .catch((error) =>res.json({message: error}))
 })


module.exports = router;