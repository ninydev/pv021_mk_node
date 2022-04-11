// Server
let express = require('express');
let app = express();


// JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Disk - file operations
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Cookie
let cookieParser = require('cookie-parser');
app.use(cookieParser());


// Logger
let logger = require('morgan');
app.use(logger('dev'));


// Router
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users')
let studentRouter = require('./routes/students')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);

// DataBase
let mongoose = require('mongoose')
let connectionString = "mongodb+srv://userdb:QweAsdZxc!23@cluster0.wedqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        console.log("DB Error")
        console.log(err)
    }
)


module.exports = app;
