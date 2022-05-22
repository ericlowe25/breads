// 
const express = require('express')

// CONFIGURATION
require('dotenv') .config()
const PORT = process.env.PORT
// console.log(PORT)
const app = express()

// ROUTES
app.get('/',(reg, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
    console.log('noming at port', PORT);
})