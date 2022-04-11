let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let result = {
    name: "Oleksandr Nykytin",
    age: 45
  }

  res.send(result);
});

module.exports = router;
