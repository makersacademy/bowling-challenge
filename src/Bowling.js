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
    for (this.rollIndex = 0; this.rollIndex < this.rolls.length; this.rollIndex++) {
    this.result += this.rolls[this.rollIndex];
    }
    return this.result
    console.log(this.result)
  }
