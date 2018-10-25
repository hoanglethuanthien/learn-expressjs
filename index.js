require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

let port = process.env.PORT || 3001;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser(process.env.SESSION_SECRET));
app.get('/', function(req, res) {
	res.render('index', {
		name: 'Thien'
	});
});
app.use(express.static('public'));

app.use('/auth', authRoute);
app.use('/users', authMiddleware.requireAuth, userRoute);

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
}) 


