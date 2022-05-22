// 
const express = require('express')

// CONFIGURATION
require('dotenv') .config()
const PORT = process.env.PORT
// console.log(PORT)
const app = express()

// MIDDLEWARE
app.set('views',__dirname +'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views') .createEngine())



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
