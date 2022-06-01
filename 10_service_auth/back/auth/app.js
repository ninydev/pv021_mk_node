const express = require('express');
require("dotenv").config()
const logger = require('morgan');
require("./config/mongo").connect();

const app = express();

app.use(logger('dev'));

// Cors
let cors = require('cors')
app.use(cors({origin: '*'}))

// JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Route
const routes = require('./routes')
app.use('/', routes);


module.exports = app;
