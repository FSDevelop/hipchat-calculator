var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3001, function() {
	console.log('testing');
});

app.post('/calc', function(req, res, err) {
	var calculation = req.body.item.message.message;
	var request = calculation.split('/calc ');
	request = request[1];
	request = request.split(' ');
	operator = request[1];

	var nm1 = parseInt(request[0]);
	var nm2 = parseInt(request[2]);

	var result = 1;
	switch (operator) {
		case '+':
			result = nm1 + nm2;
			break;
		case '-':
			result = nm1 - nm2;
			break;
		case '*':
			result = nm1 * nm2;
			break;
		case '/':
			result = nm1 / nm2;
			break;
	}
	
	res.send({
    		"color": "green",
    		"message": 'result: ' + result,
    		"notify": false,
    		"message_format": "text"
	});
});
