var express = require('express');

//create our app
var app = express();

// folder that will serve
app.use(express.static('public'));

//starts the server
app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
