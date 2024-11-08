const mongoose = require('mongoose');
const validator = require('validator'); 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid email format'],
      },

    age: {
        type: Number,
        required: true,
        min: 0,
    },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
