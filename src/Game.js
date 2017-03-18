function Game() {
  this.currentFrame = 1
  this.latestRoll;
  this.standingPins = 10;
  this.currentTurn = 0;
  this.totalScores = [];
  this.latestScore = [];
  this.bonusStrike = false;
  this.bonusScoreAdded;
  this.bonusScores = [];
};

Game.prototype.rollBall = function(score) {
  this.latestRoll = score;
  // this.currentScore = Math.floor(Math.random() * 11);
  if (this.latestRoll === 10 && this.currentTurn === 0) {
    this.bonusStrike = true
    this.bonusScoreAdded = 10
    this.strikeRoll();
  }
  else if (this.latestRoll < 10 && this.currentTurn === 0) {
    this.firstRoll();
  }
  else if (this.latestRoll <= 10 && this.currentTurn === 1) {
    this.secondRoll();
  }
};






Game.prototype.bonusRoll = function () {

  if (this.latestRoll === 10 && this.currentTurn === 0) {
    self.bonusScoreAdded = 10
    this.currentFrame++;
    this.currentTurn = 0;
  }
  else if (this.latestRoll < 10 && this.currentTurn === 0) {
    this.standingPins = this.standingPins - this.latestRoll;
    this.bonusScoreAdded = this.bonusScoreAdded + this.latestRoll;
    this.currentTurn++;
    this.latestScore.push(this.latestRoll);
  }
  else if (this.latestRoll <= 10 && this.currentTurn === 1) {
    this.bonusScoreAdded = this.bonusScoreAdded + this.latestRoll;
    this.currentFrame++;
    this.currentTurn = 0;
    this.standingPins = 10;
    this._addBothRollsToScore();
  }
};

Game.prototype.firstRoll = function () {
  if (this.bonusStrike === true) {
    this.bonusRoll();
  }
  else {
    this.standingPins = this.standingPins - this.latestRoll;
    this.currentTurn++;
    this.latestScore.push(this.latestRoll)
  }
};

Game.prototype.secondRoll = function() {
  if (this.bonusStrike === true) {
    this.bonusRoll();
  }
  else {
    this.currentFrame++;
    this.currentTurn = 0;
    this.standingPins = 10;
    this._addBothRollsToScore();
  }
};

Game.prototype.strikeRoll = function () {
  if (this.bonusStrike === true) {
    this.bonusRoll();
  }
  else {
    this.currentFrame++;
    this.currentTurn = 0;
    this.totalScores.push(this.latestRoll)
  }
};

Game.prototype._addBothRollsToScore = function () {
  if (this.bonusStrike === true) {
    this.bonusScores.push(this.bonusScoreAdded)
    this.latestScore.push(this.latestRoll);
    this.totalScores.push(this.bonusScores);
    this.totalScores.push(this.latestScore);
    this.latestScore = [];
  }
  else {
    this.latestScore.push(this.latestRoll);
    this.totalScores.push(this.latestScore);
    this.latestScore = [];
  }
};
