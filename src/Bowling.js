function Bowling() {
  this.rolls = []
  this.result = 0
  this.rollIndex = 0
}

Bowling.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
  console.log(this.rolls)
}

Bowling.prototype.score = function() {
  // var result = 0
  var frameIndex = 0
  var rollIndex = 0

  for (frameIndex = 0; frameIndex < 10; frameIndex ++) {

    if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      this.result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    } else {
        this.result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      }
  rollIndex += 2;
  }
  return this.result
  console.log(this.result)
}
