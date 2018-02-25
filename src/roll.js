function Roll(pinsKnocked, currentMultiplier = 1, previousRoll = 0) {
  this.pinsKnocked = pinsKnocked;
  this.currentMultiplier = currentMultiplier;
  this.previousRoll = previousRoll;
}

Roll.prototype.roll = function() {
  this.calculateScore();
  this.calculateNextMultipliers();
}

Roll.prototype.calculateScore = function() {
  return this.score = this.pinsKnocked * this.currentMultiplier
}

Roll.prototype.calculateNextMultipliers = function() {
  var output
  if (this.pinsKnocked === 10) {
    output = [1, 1];
  } else if (this.pinsKnocked + this.previousRoll === 10) {
    output = [1, 0];
  } else {
    output = [0,0];
  }
  return this.nextMultipliers = output
}
