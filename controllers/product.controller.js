var db = require('../db');

module.exports.index = function(req, res){
    var page = parseInt(req.query.page) ||1; //n
    var perPage = 8; //x

    var start = (page -1)* perPage;
    var end = page * perPage;
    var products = db.get('products').value().slice(start,end) ;
    res.render('products', {
        products: products,
    })
}

module.exports.search= function (req, res) {
	let q = req.query.q;
	let products = db.get('products').value();
	let matchedProducts = products.filter(function (product) {
		return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('products/index', {
		products: matchedProducts,
	});
}