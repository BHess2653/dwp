var express = require('express');
//var body_parser = require('parser');
var app = express();

// Config
var port = 3000;

app.use('/api', require('./routes/api.js')(express));

app.listen(port, function() {
  console.log('Server Active on', port);
});
