function Game() {
  this.frame = 1
  this.currentFrame = 1
  this.currentBowl = 1
  this.bowlingPins = 10
  // var score = new Score();
};
 Game.prototype.bowl = function(pins) {
  this.currentBowl ++
  this.bowlingPins -= pins
  this.calculateFrame();
};
 Game.prototype.calculateFrame = function () {
  if (this.currentBowl == 2) {
    this.currentFrame ++
  };
};
