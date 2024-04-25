const mongoose = require('mongoose')
const schema = mongoose.Schema

const programmingLanguageSchema = new schema({
    languageName: {
        type: String,
        require: true
    },
    proficiency: {
        type: Number,
        require: true
    }
}, { timestamps: true })

const Language = mongoose.model('Language', programmingLanguageSchema)

module.exports = Language