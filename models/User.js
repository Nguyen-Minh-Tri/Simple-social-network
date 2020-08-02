const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDay: {
        year:{
            type: String,
            default: "0000"
        },
        month:{
            type: String,
            default: "00"
        },
        date:{
            type: String,
            default: "00"
        }
    },
    date: {
        type: Date,
        default: Date.now()
    },
    location:{
        type: String,
        default: "Required"
    },
    discription:{
        type: String,
        default: "Required"
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;