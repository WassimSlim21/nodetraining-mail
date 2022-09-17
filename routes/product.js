var express = require('express');
var router = express.Router();
var productCtl = require('../controllers/products');
/* GET products listing. */
router.get('/',productCtl.getAllProducts);
/* GET products listing. */
router.post('/add',productCtl.addProduct);
/* GET products listing. */
router.put('/update/:userId',productCtl.updateProduct);
/* GET products listing. */
router.delete('/remove/:userId',productCtl.deleteProduct);

module.exports = router;
