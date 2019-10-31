var express = require('express');
var router = express.Router();

/* GET product list page. */
router.get('/', function(req, res, next) {
    res.render('products/list', { title: 'Express' });
});





module.exports = router;
