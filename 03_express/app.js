// Server
let express = require('express');
let app = express();

// Cors
let cors = require('cors')
app.use(cors({origin: '*'}))

// JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Disk - file operations
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// File Loader
const multer  = require("multer");
app.use(multer({dest:"uploads"}).single("img"))

// Cookie
let cookieParser = require('cookie-parser');
app.use(cookieParser());


// Logger
let logger = require('morgan');
app.use(logger('dev'));

// Auth
let auth = require('./controllers/auth')
app.use(auth.middlewareAuth)
app.post ('/api/auth', auth.authByLogin)
app.post ('/api/tryCreateUser', auth.tryCreateUser)


// Router
let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')
let studentRouter = require('./routes/students')
let portfolioRouter = require('./routes/portfolio')

let mediaHelper = require('./routes/helpers/media-converter')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/api/portfolios', portfolioRouter);
app.use('/api/helpers/converter', mediaHelper);



// DataBase
let mongoose = require('mongoose')
let connectionString = "mongodb+srv://userdb:QweAsdZxc!23@cluster0.wedqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        if(err) {
            console.log("DB Error")
            console.log(err)
        }
    }
)


module.exports = app;
