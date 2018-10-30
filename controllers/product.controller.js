var db = require('../db');

module.exports.index = function(req, res){

    var products = db.get('products').value();
    res.render('products', {
        products: products,
    })
}