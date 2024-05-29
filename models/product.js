const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Product', productSchema);