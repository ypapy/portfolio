const mongoose = require('mongoose')
const schema = mongoose.Schema

const contactSchema = new schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        dropDups: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    messages: {
        type: [String],
        require: true
    }
}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
