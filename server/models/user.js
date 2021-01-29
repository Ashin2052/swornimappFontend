const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const userModel = mongoose.model('userSchema', userSchema);
module.exports = userModel;
