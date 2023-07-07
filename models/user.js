const {Schema, model} = require('mongoose');
const {compare, genSalt, hash} = require('bcrypt');