const Contact = require('../model/contact_us.js');

function addMessage(contactMessage) {
    Contact.find({
        'email': contactMessage.email
    }).exec().then(result => {
        if (result.length != 0) {
            const messages = result[0].messages;
            messages.push(contactMessage.message)
            Contact.findByIdAndUpdate(result[0]._id, { messages: messages }).catch(err => console.log(err))
        }
        else {
            const message = new Contact({
                firstName: contactMessage.firstName,
                lastName: contactMessage.lastName,
                email: contactMessage.email,
                phoneNumber: contactMessage.phoneNumber,
                messages: contactMessage.message
            })
            message.save().catch(err => console.log(err))
        }
    })
        .catch(err => console.log(err))
    return {response: "Message succefully sent!"}

}




module.exports = {
    addMessage
}