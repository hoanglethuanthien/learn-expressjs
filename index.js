const express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

let port = process.env.PORT || 3001;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Thien'
	});
});
app.use(express.static('public'));

app.use('/auth', authRoute);
app.use('/users', userRoute);

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
}) 


