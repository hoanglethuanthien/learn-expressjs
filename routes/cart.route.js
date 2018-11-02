var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart.controller');

router.get('/', controller.addToCart);

module.exports = router;