function Frame(pins) {
  this.pins = typeof pins !== 'undefined' ? pins : this.defaults.pins;
  this.rollScores = [];
  this.nextFrame  = null;
}

Frame.prototype.setNextFrame = function(nextFrame) {
  this.nextFrame = nextFrame
}

Frame.prototype.rollPlayed = function() {
  return this.rollScores.length;
}

Frame.prototype.recordRoll = function(knockedPins) {
    this.rollScores.push(knockedPins);
}

Frame.prototype.score = function() {
  if(this.rollPlayed() === 0) { return 0; }
  return this.rollScores.reduce(function(acc, curr) { return acc + curr; });
}

Frame.prototype.isStrike = function() {
  return this.rollScores[0] === this.pins;
}

Frame.prototype.isSpare = function() {
  return (this.rollScores[0] + this.rollScores[1]) === this.pins;
}

Frame.prototype.isOver = function() {
  if (this.isStrike()) { return true; }
  if (this.rollPlayed() === 2) { return true; }
  return false;
}

Frame.prototype.spareBonus = function() {
  if (this.isSpare() && this.nextFrame.rollPlayed() > 0) {
    return this.nextFrame.rollScores[0];
  }
  return 0;
}

Frame.prototype.strikeBonus = function() {
  if (this.isStrike() && this.nextFrame.isOver()) {
    if (this.nextFrame.rollPlayed() > 1) {
      return this.nextFrame.rollScores[0] + this.nextFrame.rollScores[1];
    }
    if(this.nextFrame.isStrike() && this.nextFrame.nextFrame.rollPlayed() > 0) {
      return this.nextFrame.score() + this.nextFrame.nextFrame.rollScores[0];
    }
  }
  if (this.isStrike()) { return this.nextFrame.score(); }
  return 0;
}

Frame.prototype.totalScore = function() {
  return this.score() + this.spareBonus() + this.strikeBonus();
}

Frame.prototype.defaults = {
  pins: 10
}
