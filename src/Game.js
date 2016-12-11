function Game() {
  this.rolls = []
  this.frames = []
};
Game.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
  if (this.rolls.length === 2) {
    this.recordFrame();
  }
};

Game.prototype.recordFrame = function() {
  this.frames.push(this.rolls);
  this.rolls = [];
};
