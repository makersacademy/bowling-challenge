function Game() {
  this.frame = 1
  this.currentFrame = 1
  this.currentBowl = 1
  this.bowlingPins = 10
  this.totalScore = 0

};

 Game.prototype.bowl = function(pins) {
  var totalScore
  this.currentBowl ++
  this.bowlingPins -= pins
  this.calculateFrame(pins);
  this.bowlingScore(pins)
};

 Game.prototype.calculateFrame = function () {
  if (this.currentBowl == 2) {
    this.currentFrame ++
  };
};
Game.prototype.bowlingScore = function (pins) {
  this.totalScore += pins;
};
