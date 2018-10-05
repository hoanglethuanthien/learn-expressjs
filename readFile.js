var fs = require("fs");

//Asyn
fs.readFile('input.txt', function (err, data) {
	if (err) {
		return console.log(err);
	}

	console.log("Asynchronus read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");