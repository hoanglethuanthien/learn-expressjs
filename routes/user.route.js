var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
var validate = require('../validate/user.validate');
var controller = require('../controllers/user.controller');


router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send('Hello');
})

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create',
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate);

router.get('/:id', controller.get);

module.exports = router;
