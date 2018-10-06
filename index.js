<<<<<<< HEAD
const express = require('express');
const app = express();
let port = 3000;

let users = [
		{ id: 1, name: 'Thien'},
		{ id: 2, name: 'Hong'},
		]
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index', {
		name: 'THien'
	});
});

app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users,
	});
})

app.get('/users/search', function(req, res){
	let q = req.query.q;
	let matchedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers,
	});

})
app.listen(3000, function () {
	console.log('Example app listening on port ' + port);
}) 


=======
const express = require('express');
const app = express();
let port = 3000;

let users = [
		{ id: 1, name: 'Thien'},
		{ id: 2, name: 'Hong'},
		]
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index', {
		name: 'THien'
	});
});

app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users,
	});
})

app.get('/users/search', function(req, res){
	let q = req.query.q;
	let matchedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers,
	});

})
app.listen(3000, function () {
	console.log('Example app listening on port ' + port);
}) 


>>>>>>> d63eef32d93a20f6dc0ad2f64f32635bbc01b008
