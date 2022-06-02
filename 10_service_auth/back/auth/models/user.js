const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    role_id: {type: Schema.Types.ObjectId},
    token: { type: String },
    token_refresh: { type: String },
});

module.exports = mongoose.model("user", userSchema);