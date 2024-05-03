//Import MongoDB model
const User = require('../dataBase/userSchema')

//AsyncWrapper
const asyncWrapper = require('../middlewares/asyncWrapper')

//CreateCustomErrors
const {createCustomError} = require('../customErrors/customError')

//Controllers
const authenticateUser = async (req, res, next) => {
    const {user, password} = req.body
    const users = await User.findOne({user: user, password: password})
    
    if(!users){
        return next(createCustomError('User or password incorrect', 401))
    }
    res.status(200).json({success: true, msg: 'Loging-in..'})
}

const createUser = asyncWrapper(async (req, res, next) => {
    const {email, user, password} = req.body
    const singnUpemail = await User.findOne({email: email})
    const signUpUser = await User.findOne({user: user})
    
    if(singnUpemail == null && signUpUser == null){
        User.create(req.body)
        return res.status(200).json({created: true, newUser: req.body})
    }
    next(createCustomError(`There is already a account with this email or user!`, 401))
})

const updateUser = asyncWrapper(async (req, res, next) => { // Adicionado "next" como parâmetro
    const { user, password } = req.body;
    if (password != null) {
        const alredySignUp = await User.findOneAndUpdate({ user: user }, req.body, {
            new: true,
            runValidators: true,
        });
        if (alredySignUp == null) {
            return next(createCustomError(`There is no user with the name: ${name}`, 404));
        }
        return res.status(202).json({ success: true, data: { user } });
    }     
    res.status(401).send('Must provide a password to update the user!')    
});

module.exports = {
    authenticateUser,
    createUser,
    updateUser
}