var express = require('express');
var router = express.Router();

// siteName.com /  controllerName / methodName / params - Id

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
