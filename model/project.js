const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = new schema({
    pictureLink: {
        type: String,
        require: true
    },
    projectName: {
        type: String,
        require: true
    },
    stack: {
        type: [String],
        require: true
    },
    projectDescription: {
        type: String,
        require: true
    },
    sourceCodeLink: {
        type: String,
        require: true
    },
    applicationLink: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)
module.exports = Project
