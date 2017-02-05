function BowlingGame (){
  this.rolls = []
  this.rollIndex = 0;
}

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};


BowlingGame.prototype.score = function () {
  var result = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.isStrike()) {
      result += this.getStrikeScore();
      this.rollIndex++
    } else if (this.isSpare()) {
      result += this.getSpareScore();
      this.rollIndex += 2;
    } else {
      result += this.getNormalScore();
      this.rollIndex += 2;
    }
  }

  return result;

};

BowlingGame.prototype.isStrike = function () {
  return this.rolls[this.rollIndex] === 10;
}

BowlingGame.prototype.isSpare = function () {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10;
}

BowlingGame.prototype.getSpareScore = function () {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}

BowlingGame.prototype.getStrikeScore = function () {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}

BowlingGame.prototype.getNormalScore = function () {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
}
