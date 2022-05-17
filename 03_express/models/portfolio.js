const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const portfolio = new Schema({
    _id: String,
    name: String,
    imgBlob: String,
    imgUrl: String
});

module.exports = mongoose.model("Portfolio", portfolio)