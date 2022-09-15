var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/users');
/* GET users listing. */
router.post('/add',userCtl.addUser);

module.exports = router;
