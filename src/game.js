function Game() {
  this.currentFrame = 1
  this.currentRoll = 1
  this.framePins = 10
  // var score = new Score();
};

Game.prototype.roll = function(pins) {
  this.currentRoll ++
  this.framePins -= pins
  this._calcFrame();
};

Game.prototype._calcFrame = function () {
  if (this.currentRoll == 2) {
    this.currentFrame ++
  };
};
