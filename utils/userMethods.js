const User = require('../models/user');

const registerUser = async (payload) => {
    try {
        const newUser = new User(payload);
        await newUser.save();
        return newUser.email;
    } catch (error) {
        console.log(error);
        if(error.code == 11000) throw new Error("There's already an account registered under that email.");
        else throw error;
    }
};

const loginUser = async (username, password) => {
    const usr = await User.findOne({email: username});
    if(!usr) throw new Error("User not found.");
    
    const passwordMatch = await usr.comparePassword(password);
    if(!passwordMatch) throw new Error('Username or password is not valid');
    else return 'token';
}