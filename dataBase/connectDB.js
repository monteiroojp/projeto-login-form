//Mongoose import
const mongoose = require('mongoose')

const connectDB = async (URI) => {
    await mongoose.connect(URI)
    console.log('Connected to DB')
}

module.exports = connectDB