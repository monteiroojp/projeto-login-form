//Import mongo
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'must provide a email']
    },
    user: {
        type: String,
        required: true,
        maxLength: [20, 'username must has less than 20 chars']
    },
    password: {
        type: String,
        required: [true, 'must provide a password']
    }
})
module.exports = mongoose.model('user', userSchema)