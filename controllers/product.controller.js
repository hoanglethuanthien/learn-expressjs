var db = require('../db');

module.exports.index = function(req, res){
    res.render('product', {
        product: db.get('product').value(),
    })
}