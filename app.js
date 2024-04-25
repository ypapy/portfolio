const express = require('express')
const env = require('dotenv').config()
const bodyParser = require('body-parser')
const { connect } = require('./dbConnection/connectDb')
const { contactRoutes, projectRoutes } = require('./routes')

const app = express()


// Connecting to db
connect(app)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Contact routes
app.use('/contact', contactRoutes)
app.use('/project', projectRoutes)
