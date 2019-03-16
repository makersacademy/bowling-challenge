function Bowling() {
  this.rolls = []
  this.result = 0
  this.rollIndex = 0
  this.frameIndex = 0
}

Bowling.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
  console.log(this.rolls)
}

Bowling.prototype.score = function() {
  for (this.frameIndex = 0; this.frameIndex < 10; this.frameIndex ++) {

    if (this.isSpare()) {
      this.result += this.spareScore();
    } else {
        this.result += this.normalScore();
      }
  this.rollIndex += 2;
  }
  return this.result
  console.log(this.result)
}

Bowling.prototype.isSpare = function() {
    return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] == 10
}

Bowling.prototype.spareScore = function() {
    return this.result += this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
}

Bowling.prototype.normalScore = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
}
