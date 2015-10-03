'use strict';

var FizzBuzz = require('sea-d44-fizz-buzz-at');

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

