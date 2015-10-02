var input = require ('./lib/input');
var output = require ('.lib/output');

var Fizzbuzz = function(newFizz, newBuzz) { // the constructor!
  this.result = [];
  this.newFizz = newFizz || "Fizz";
  this.newBuzz = newBuzz || "Buzz";

  return Fizzbuzz;
};

module.exports = Fizzbuzz;
