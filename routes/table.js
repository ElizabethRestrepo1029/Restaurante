const express = require('express');
const cors = require('cors');

const tableSchema = require('../models/table');

const router = express.Router();

router.use(cors());

//Agregar mesa
router.post('/tables', cors(),(req, res)=>{
    const table = tableSchema(req.body);
    table
        .save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}))
})

//Recuperar mesas
router.get('/tables', cors(), (req, res)=>{
    tableSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}))
})

module.exports = router;