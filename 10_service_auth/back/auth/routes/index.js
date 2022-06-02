const express = require('express');
const router = express.Router();

const uCreate = require('./../controllers/user/create')
const uLogin = require('./../controllers/user/login')

router.post('/create', uCreate.tryUserCreate);
router.post('/login', uLogin.tryLogin);


module.exports = router;
