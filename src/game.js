function Game() {
  this.currentFrame = 1
  this.currentBowl = 1
  this.framePins = 10
  this.score = 0
};

Game.prototype.bowl = function(pins) {
  var score =
  this._calcFrame()
  this.currentBowl ++;
  this.framePins -= pins;
  this._calcBowlScore(pins);
};

Game.prototype._calcFrame = function () {
    if (this.currentBowl == 2) {
    this.currentFrame ++
    };
};

Game.prototype._calcBowlScore = function (pins) {
    this.score += pins;
};
