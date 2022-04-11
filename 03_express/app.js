// Server
let express = require('express');
let app = express();


// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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


module.exports = app;
