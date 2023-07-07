const {Schema, model} = require('mongoose');
const {compare, genSalt, hash} = require('bcrypt');

//create user schema
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email address.']
    },
    name: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    role: {
        type: String,
        required: [true, 'Please enter user role.']
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter birthday.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.']
    }
},{
    timestamps: {createdAt: 'creationDate', updatedAt: 'lastUpdate'}
});

//encrypt password
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await genSalt(+process.env.SALTING_ROUNDS);
    this.password = await hash(this.password, salt);
    next();
});

//compare passwords 
userSchema.methods.comparePassword = async function(plainTextPwd){
    return await compare(plainTextPwd, this.password);
};

const User = model('User', userSchema);
module.exports = User;