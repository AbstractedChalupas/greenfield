var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Connect to a database called we-tube
mongoose.connect('mongodb://localhost/we-tube');

var PORT = 8001;

var io = require('socket.io').listen(app.listen(PORT));

app.use(express.static(__dirname+"/../client"));

io.on('connection', function (socket) {
  console.log('client connected');
  socket.emit('playerDetails', {'videoId': 'bHQqvYy5KYo',
               'startSeconds': 5,
               'endSeconds': 60,
               'suggestedQuality': 'large'});
});

app.post('/api/oauth/google', function (req, res) {
	console.log('reached the server');
  res.end('HELLO WORLD')
})


module.exports = app;