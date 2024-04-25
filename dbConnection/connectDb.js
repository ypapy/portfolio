const mongoose = require('mongoose')

function connect (app) {
    
    mongoose.connect(process.env.connectionString)
        .then(() => {
            app.listen(process.env.port, () => {
                console.log(`Application listening on port ${process.env.port}`);
            })
        })
        .catch(err => console.log(err))
}


module.exports = { connect }