//Create App
const express = require('express')
const app = express()

//Get .env datas
require('dotenv').config()
const port = process.env.PORT || 6000

//Extract data from HTTP bodys
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Route
const loginRoutes = require('./routes/loginRoute')
app.use('/', loginRoutes)
app.use(express.static('./public '))

//Middlewares
const notFound = require('./middlewares/norFound')
const errorHandler = require('./middlewares/errorHandler')

app.use([errorHandler, notFound])


//Start server setup
const connectDB = require('./dataBase/connectDB')
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`The server is running on port:${port}`))
    }
    catch(error){
        console.log(error)
    }
}

start()

