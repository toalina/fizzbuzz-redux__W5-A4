

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

