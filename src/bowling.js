function Bowling() {
  this.score = 0;
  this.rollsArray = [];
}

Bowling.prototype.roll = function(num) {
  if (this.isStrike(num)) {
    this.rollsArray.push(10, 'X');
  } else if (this.isSpare(num)) {
    this.rollsArray.push('/');
  } else {
    this.rollsArray.push(num);
  }
  this.addToScore(num);
}

Bowling.prototype.isStrike = function(num) {
  return num === 10 && this.rollsArray.length % 2 === 0;
}

Bowling.prototype.isSpare = function(num) {
  return num + this.rollsArray.slice(-1)[0] === 10 && this.rollsArray.length % 2 !== 0;
}

Bowling.prototype.addToScore = function(num) {
  this.score += num;
}
