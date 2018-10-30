var db = require('../db');

module.exports.index = function(req, res){

    var products = db.get('products').value().slice(0,8) ;
    res.render('products', {
        products: products,
    })
}