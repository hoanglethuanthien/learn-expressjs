const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRouter = require('./routes/user.route');
let port = process.env.PORT || 3001;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
app.get('/', function(req, res) {
	res.render('index', {
		name: 'Thien'
	});
});
app.use(express.static('public'));

app.use('/users', userRouter)

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
}) 


