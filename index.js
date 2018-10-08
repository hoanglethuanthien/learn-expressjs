const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var userRouter = require('./routes/user.route');
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

app.use('/users', userRouter)

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
}) 


