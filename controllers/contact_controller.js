const { addMessage } = require('../services/contact_services')
const Contact = require('../model/contact_us.js');
const saveMessage = (req, res) => {
    try {
        const response = addMessage(req.body)
        res.statusCode = 201
        res.send(response)

    } catch (error) {
        console.log(error)
    }
}

const getMessages = (req, res) => {
    try {
        Contact.find().sort({ createdAt: -1 })
            .then(data => {
                res.statusCode = 200
                res.send(data)
            })
            .catch(err => console.log(err))
    } catch (error) {

    }
}

const getMessagesById = (req, res) => {
    const { id } = req.params
    Contact.findById(id)
        .then(data => {
            res.statusCode = 200
            res.send(data)
        })
        .catch(err => console.log(err))
}

module.exports = {
    saveMessage,
    getMessages,
    getMessagesById
}