var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/users');
/* GET users listing. */
router.get('/',userCtl.getAllUsers);
/* GET users listing. */
router.post('/add',userCtl.addUser);
/* GET users listing. */
router.put('/update/:userId',userCtl.updateUser);
/* GET users listing. */
router.delete('/remove/:userId',userCtl.deleteUser);

module.exports = router;
