const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, "secret", {
        expiresIn: maxAge
    })
}

const getUsers = async (req, res) =>{
    const brukere = await User.find({})
    res.send(brukere)
}

const signup_post = async (req, res) =>{
    const { username, password} = req.body;
    
    try {
        const user = await User.create({ username, password});
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch(err){
        console.log(err);
        res.status(400).json({err});
    }
}

const login_post = async (req, res) =>{
    const { username, password } = req.body;
    try{
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly:true, maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id });
        console.log('det funka')
    }
    catch(err){
        console.log(err) 
        res.status(400).json({err})
    }
}

module.exports = {
    signup_post,
    login_post, 
    getUsers
}