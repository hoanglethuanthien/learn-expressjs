var shortId = require('shortid');

module.exports = function(req, res, next){
    if(!req.signedCookies.sessionId){
        res.cookie('sessionId', shortId.generate(), {
            signed: true
        });
    }

    next();
}