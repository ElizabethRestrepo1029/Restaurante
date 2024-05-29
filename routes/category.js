const express = require('express');
const cors = require('cors');

const categorySchema = require('../models/category');

const router = express.Router();

router.use(cors());

//Agregar categorias
router.post('/categories', cors(),(req, res)=>{
    const category = categorySchema(req.body);
    category
        .save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}))
})

//Recuperar categorias
router.get('/categories', cors(), (req, res)=>{
    categorySchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}))
})

module.exports = router;