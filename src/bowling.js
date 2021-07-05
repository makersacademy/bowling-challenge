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

Bowling.prototype.isTenthFrame = function() {
  return this.rollsArray.length >= 18;
}

Bowling.prototype.calculateScore = function() {
  var array = this.rollsArray
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'X') {
      this.score += (this.findNext(2, i));
    } else if (array[i] === '/') {
      this.score += (10 - array[i - 1] + this.findNext(1, i));
    } else {
      this.score += array[i];
    }
  }
  return this.score;
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

Bowling.prototype.findNext = function(howmany, ind) {
  bonus = [];
  for (let i = ind + 1; i < this.rollsArray.length; i++) {
    if (bonus.length == howmany) break;
    if (typeof this.rollsArray[i] === 'number') {
      bonus.push(this.rollsArray[i]);
    } else if (this.rollsArray[i] === '/') {
      bonus.push(10 - this.rollsArray[i - 1])
    }
  }
  return bonus.reduce((a,b) => a+b, 0)
}
