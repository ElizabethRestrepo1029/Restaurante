const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    tableName: {
        type: String,
        require: true
    },    
    products: [{
        productName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            require: true
        }
    }],
    username: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    progress: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Order',orderSchema);