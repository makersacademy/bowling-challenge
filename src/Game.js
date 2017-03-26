var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.rolls[this.currentRoll] = pinsKnockedDown;
  this.currentRoll++;
};

Game.prototype.isSpare = function(frameNumber) {
  return this.rolls[frameNumber] + this.rolls[frameNumber + 1] == 10
}

Game.prototype.score = function() {

  var total = 0;
  var frameNumber = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isSpare(frameNumber)) {
      total += 10 + this.rolls[frameNumber + 2];
      frameNumber += 2;
    }
    else {
    total += this.rolls[frameNumber] + this.rolls[frameNumber + 1];
    frameNumber += 2;
    }
  }
  return total;
};
