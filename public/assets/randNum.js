function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var integer = getRandomInt(-500, 500);
var decilmil = getRandomInt(-99, 99);

decilmil = decilmil / 100;
var randValue = integer + decilmil;

module.exports = randValue;


