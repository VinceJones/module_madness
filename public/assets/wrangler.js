var thing = require('./convert');
var randNum = require('./randNum');

var value = function(){

    var total = thing.convert( randNum );
    var totalString = total.toString();
    var string = "Account Balance: \n" + totalString;
    return string;
};

module.exports.value = value;