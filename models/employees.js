const mongoose = require('mongoose');

const employeesSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Employees', employeesSchema);