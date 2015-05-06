var thing = require('./convert');
var randNum = require('./randNum');

var value = function(){
    console.log("Wrangler Value function");
    return thing.convert( randNum );
};

module.exports.value = value;