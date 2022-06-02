const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    token_refresh: { type: String },
});

module.exports = mongoose.model("user", userSchema);