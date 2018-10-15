var db = require('../db');
var shortid = require('shortid');
module.exports.index = function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
}

module.exports.search = function (req, res) {
	let q = req.query.q;
	let users = db.get('users').value();
	let matchedUsers = users.filter(function (user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers,
	});
}

module.exports.create = function (req, res) {
	res.render('users/create');
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();

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
	db.get('users').push(req.body).write();
	res.redirect('/users');


}

module.exports.get = function (req, res) {
	let id = req.params.id;
	let user = db.get('users').find({ id: id }).value();
	res.render('users/view', {
		user: user
	})
}