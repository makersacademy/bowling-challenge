function Game() {
  this.scores = 0
  this.rolls = []
  this.currentRoll = 0
}

Game.prototype.roll = function(pins) {
  this.rolls[this.currentRoll++] = pins;
}

Game.prototype.score = function() {
  var frameIndex = 0
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[frameIndex] === 10) {
      this.scores += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
      frameIndex++
    }
    else if (this.isSpare(frameIndex)) {
      this.scores += 10 + this.spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      this.scores += this.sumOfBallsInFrame(frameIndex);
      frameIndex += 2;
    }
  }
  return this.scores;
}

Game.prototype.isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
}

Game.prototype.sumOfBallsInFrame = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
}

Game.prototype.spareBonus = function(frameIndex) {
  return this.rolls[frameIndex + 2];
}
