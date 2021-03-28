const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    repeat_password:String,
    birth_year:String,
    email: String
});

module.exports = mongoose.model('user', userSchema);