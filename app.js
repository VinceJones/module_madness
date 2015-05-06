var express = require('express');
var app = express();
//var wrangler = require('./wrangler');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.listen(app.get('port'), function(){
    console.log("Node is running on port: ", app.get('port'));
});