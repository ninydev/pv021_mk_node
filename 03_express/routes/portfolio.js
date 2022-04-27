let express = require('express')
let router = express.Router()

let p = require('../controllers/portfolio')

router.get('/', p.get)
router.post('/', p.post)

module.exports = router;