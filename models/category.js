const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
        categoryId: {
            type: String,
            require: true
        },
        categoryName: {
            type: String,
            require: true
        },
        icon: {
            type: String,
            require: true
        }
})

module.exports = mongoose.model('Category', categorySchema);