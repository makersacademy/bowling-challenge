function Game() {
  this.totalScore = 0;
  this.frame = new Frame();
  this.frameRolls = []
}

Game.prototype.recordRoll = function(pins) {
  this.frame.bowl(pins);
  if (this.isEndFrame()) {
    this.endFrame();
  }
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.isEndFrame = function() {
  return (this.frame.rolls.length === 2 || this.frame.score === 10);
};

Game.prototype.endFrame = function() {
  this.frameRolls.push(this.frame.rolls);
  this.frame = new Frame();
};
