// DEPENDENCIES
const methodOverride = require('method-override')
const express = require('express')
const res = require('express/lib/response')

// CONFIGURATION
require('dotenv') .config()
const PORT = process.env.PORT
// console.log(PORT)
const app = express()

// MIDDLEWARE
// jsx middleware
app.set('views',__dirname +'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views') .createEngine())
// show request middleware
app.use(express.static('public'))
// POST request middleware
app.use(express.urlencoded({extended: true}))
// override- delete request middleware
app.use(methodOverride('method'))



// ROUTES
app.get('/',(reg, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('noming at port', PORT);
})
