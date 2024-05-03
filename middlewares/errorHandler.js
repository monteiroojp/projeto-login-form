//Import customErrorClass
const {CustomError, createCustomError} = require('../customErrors/customError')

//Error Handler 
const errorHandler = (error, req, res, next) => {
    if(error instanceof CustomError){
        return res.status(error.statusCode).json({success: false, error: error.message})
    }
    res.status(500).json({msg: 'Something went wrong, try again later', error: error})
}


module.exports = errorHandler