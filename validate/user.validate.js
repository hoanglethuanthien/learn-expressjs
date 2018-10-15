module.exports.postCreate = function (req, res, next) {
    let errs = [];
	if (!req.body.name) {
		errs.push('Name is required!')
	}

	if (!req.body.phone) {
		errs.push('Phone is required!')
	}

	if (errs.length) {
		res.render('users/create', {
			errs: errs,
			values: req.body,
		});
		return;
    }
    
    next();
}