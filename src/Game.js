function Game() {
  this.currentFrame = 1
  this.latestRoll;
  this.standingPins = 10;
  this.currentTurn = 0;
  this.totalScores = [];
  this.latestScore = [];
};

Game.prototype.rollBall = function(score) {
  this.latestRoll = score;
  // this.currentScore = Math.floor(Math.random() * 11);
  if (this.latestRoll === 10 && this.currentTurn === 0) {
    this.strikeRoll();
  }
  else if (this.latestRoll < 10 && this.currentTurn === 0) {
    this.firstRoll();
  }
  else if (this.latestRoll <= 10 && this.currentTurn === 1) {
    this.secondRoll();
  }
};

Game.prototype.firstRoll = function () {
  this.standingPins = this.standingPins - this.latestRoll;
  this.currentTurn++;
  this.latestScore.push(this.latestRoll)
};

Game.prototype.secondRoll = function() {
  this.currentFrame++;
  this.currentTurn = 0;
  this.standingPins = 10;
  this._addBothRollsToScore();
};

Game.prototype.strikeRoll = function () {
  this.currentFrame++;
  this.currentTurn = 0;
  this.totalScores.push(this.latestRoll)
};

Game.prototype._addBothRollsToScore = function () {
  this.latestScore.push(this.latestRoll);
  this.totalScores.push(this.latestScore);
  this.latestScore = [];
};
