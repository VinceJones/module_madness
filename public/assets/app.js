var express = require('express');
var app = express();
//var wrangler = require('./wrangler');

<<<<<<< HEAD
app.set('port', (process.env.PORT || 5000));
=======
app.set('port', (process.env.port || 5000));
>>>>>>> a9d9ad2b517eba417d9536fda006e52929940bcc

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.listen(app.get('port'), function(){
    console.log("Node is running on port: ", app.get('port'));
});