/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

	// require("../css/main.css");


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var FizzBuzz = (function() { // IIFE

	  var Fizzbuzz = function(newFizz, newBuzz) { // the constructor!
	    this.result = [];
	    this.newFizz = newFizz || "Fizz";
	    this.newBuzz = newBuzz || "Buzz";
	  };

	  Fizzbuzz.prototype.input = function(min, max) {
	    for (var i = min; i <= max; i++) {
	      if (i % 3 === 0 && i % 5 === 0) {
	        this.result.push(this.newFizz + this.newBuzz);
	      }
	      else if (i % 5 === 0) {
	        this.result.push(this.newBuzz);
	      }
	      else if (i % 3 === 0) {
	        this.result.push(this.newFizz);
	      }
	      else {
	        this.result.push(i);
	      }
	    }
	  };

	  Fizzbuzz.prototype.output = function() {
	    return this.result;
	  };
	  return Fizzbuzz;
	}());

	module.exports = FizzBuzz;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var FizzBuzz = __webpack_require__(1);

	// On Click, run the .read and .write methods
	document.getElementById("submit").addEventListener("click", function(e) {
	  e.preventDefault();
	  document.getElementById("output").innerHTML = "";

	  var fizzbuzz = new FizzBuzz();
	  var startVal = Number(document.getElementById("startVal").value);
	  var endVal = Number(document.getElementById("endVal").value);

	  document.getElementById("start").innerHTML = startVal;
	  document.getElementById("end").innerHTML = endVal;

	  fizzbuzz.input(startVal, endVal);
	  var output = fizzbuzz.output();

	  console.log(startVal);
	  console.log(endVal);
	  console.log(fizzbuzz.output());

	  // createElement
	  for (var i = 0; i < output.length; i++) {
	    var p = document.createElement("p");
	    var text = output[i];
	    var att = document.createAttribute("class"); // Add class attribute
	    p.appendChild(document.createTextNode(text));
	    att.value = text; // Specify what class name to attach
	    p.setAttributeNode(att);
	    document.getElementById("output").appendChild(p);
	  }

	  document.getElementById("startVal").value = "";
	  document.getElementById("endVal").value = "";
	});



/***/ }
/******/ ]);