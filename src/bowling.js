function Bowling() {
  this.score = 0;
  this.rollsArray = [];
}

Bowling.prototype.roll = function(num) {
  this.addToRollsArray(num);
}

Bowling.prototype.isStrike = function(num) {
  return num === 10 && this.rollsArray.length % 2 === 0;
}

Bowling.prototype.isSpare = function(num) {
  return num + this.rollsArray.slice(- 1)[0] === 10 && this.rollsArray.length % 2 !== 0;
}

Bowling.prototype.calculateScore = function() {
  var array = this.rollsArray
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'X') {
      this.score += (this.findNext(i) + this.findNext(i + 1));
    } else if (array[i] === '/') {
      this.score += (10 - array[i - 1] + this.findNext(i));
    } else {
      this.score += array[i];
    }
  }
}

Bowling.prototype.addToRollsArray = function(num) {
  if (this.isStrike(num)) {
    this.rollsArray.push(10, 'X');
  } else if (this.isSpare(num)) {
    this.rollsArray.push('/');
  } else {
    this.rollsArray.push(num);
  }
}

Bowling.prototype.findNext = function(ind) {
  for (var i = ind + 1; i < this.rollsArray.length; i++) {
    if (typeof this.rollsArray[i] === 'number'){
      return this.rollsArray[i];
    } else if (this.rollsArray[i] === '/') {
      return (10 - this.rollsArray[i - 1])
      console.log(10 - this.rollsArray[i - 1])
    }
  }
}
