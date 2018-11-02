var db = require('../db')


module.exports.addToCart = function(req, res, next){
    var productId = req.param.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/products');
        return;
    }

    db.get('sessions')
        .find({id: sessionId})
        .set('cart.'+ productId, 1)
        .write();

    res.redirect('/products');
} ;