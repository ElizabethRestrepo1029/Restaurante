const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    tableId: {
        type: String,
        require: true
    },
    tableName: {
        type: String,
        require: true
    },    
    estate:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Table',tableSchema);