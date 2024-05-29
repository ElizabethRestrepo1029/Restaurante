const express = require('express');
const cors = require('cors');

const productSchema = require('../models/product');

const router = express.Router();

router.use(cors());

//Agregar producto
router.post('/products', cors(),(req, res)=>{
    const product =productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}))
});

router.get('/products', cors(),(req, res)=>{
    productSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}))
});

router.get('/products/:categoryId', cors(), (req, res) => {
    const {categoryId} = req.params; 
    productSchema
        .findOne({ categoryId:categoryId }) 
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;