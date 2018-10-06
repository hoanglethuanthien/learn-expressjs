const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write();

let port = process.env.PORT || 3001;

app.set('view engine', 'pug');
app.set('views', './views');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Thien'
	});
});

app.get('/users', function(req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	});
})

app.get('/users/search', function(req, res){
	let q = req.query.q;
	let users = db.get('users').value();
	let matchedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers,
	});

})

app.get('/users/create', function(req, res){
	res.render('users/create');
})

app.post('/users/create', function(req, res){
	db.get('users').push(req.body).write() ;
	res.redirect('/users')
})

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
}) 


