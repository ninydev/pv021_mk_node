const express = require('express');
const router = express.Router();

const uCreate = require('./../controllers/user/create')

router.post('/create', uCreate.tryUserCreate);

module.exports = router;
