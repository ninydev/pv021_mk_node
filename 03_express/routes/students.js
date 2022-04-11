let express = require('express')
let router = express.Router()

let c = require('../controllers/student')

router.get('/', c.get)

module.exports = router;