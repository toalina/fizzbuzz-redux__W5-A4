'use strict';

var FizzBuzz = require("./index.js");

var test = new FizzBuzz("butt", "hole");
test.input(1, 17);
console.log(test.output());
test.output();
