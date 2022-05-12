const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const user = new Schema({
    email: String,
    password: String,
    isVerify: Boolean,
    avatar: String,
    nikname: String
});

module.exports = mongoose.model("Users", user)