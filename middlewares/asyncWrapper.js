//Async Wrapper
const asyncWrapper = (controllerFunction) => {
    return async(req, res, next) => {
        try{
            await controllerFunction(req, res, next)
        }
        catch(error){
            next(error)
        }
    }
}

module.exports = asyncWrapper