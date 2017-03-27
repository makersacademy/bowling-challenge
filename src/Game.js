function Game() {
  this.currentFrame = 1;
  this.latestRoll;
  this.standingPins = 10;
  this.currentTurn = 0;
  this.totalScores = [];
  this.latestScore = [];
  this.bonusStrike = false;
  this.bonusStrikeConsec = false;
  this.bonusSpare = false;
  this.bonusScoreAdded;
  this.bonusScores = [];
};

Game.prototype.rollBall = function(score) {
  this.latestRoll = score;
  if ((this.latestRoll === 10) && (this.currentTurn === 0)) {
    if (this.bonusStrike === true) {
      this.bonusStrikeConsec = true;
    }
      this.bonusStrike = true;
      this.bonusScoreAdded = 10;
      this.bonusRoll();
    }
  else if ((this.latestRoll < 10) && (this.currentTurn === 0)) {
    if (this.bonusSpare === true) {
      this.bonusSparesRoll();
    }
    else {
      this.firstRoll();
    }
  }
  else if ((this.latestRoll <= 10) && (this.currentTurn === 1)) {
    if (this.latestScore.reduce((a, b) => a + b, 0) + this.latestRoll === 10) {
      this.bonusSpare = true;
      this.secondRoll();
    }
    else {
      this.secondRoll();
    }
  }
};

Game.prototype.bonusSparesRoll = function () {
  this.bonusScoreAdded = 10 + this.latestRoll;
  this.totalScores.pop();
  this.totalScores.push([this.bonusScoreAdded]);
  this.currentTurn++;
  this.latestScore.push(this.latestRoll);
};

Game.prototype.bonusRoll = function () {

  if ((this.latestRoll === 10) && (this.currentTurn === 0)) {
    if (this.bonusStrikeConsec === true) {
      this.totalScores.push([20]);
    }
    else {
      this.currentFrame++;
    }
  }
  else if ((this.latestRoll < 10) && (this.currentTurn === 0)) {
    this.bonusScoreAdded = (this.bonusScoreAdded + this.latestRoll);
    this.currentTurn++;
    this.latestScore.push(this.latestRoll);
  }
  else if ((this.latestRoll <= 10) && (this.currentTurn === 1)) {
    this.bonusScoreAdded = (this.bonusScoreAdded + this.latestRoll);
    this._nextTurn();
  }
};

Game.prototype.firstRoll = function () {
  if (this.bonusStrike === true) {
    this.bonusRoll();
  }
  else {
    this.standingPins = (this.standingPins - this.latestRoll);
    this.currentTurn++;
    this.latestScore.push(this.latestRoll);
  }
};

Game.prototype.secondRoll = function() {
  if (this.bonusStrike === true) {
    this.bonusRoll();
  }
  else {
    this._nextTurn();
  }
};

Game.prototype._addBothRollsToScore = function () {
  if (this.bonusStrike === true) {
    this.bonusScores.push(this.bonusScoreAdded);
    this.latestScore.push(this.latestRoll);
    this.totalScores.push(this.bonusScores, this.latestScore);
    this._resetStrike();
  }
  else {
    this.latestScore.push(this.latestRoll);
    this.totalScores.push(this.latestScore);
    this._resetStrike();
  }
};

Game.prototype._resetStrike = function () {
  this.latestScore = [];
  this.bonusStrike = false;
};

Game.prototype._nextTurn = function () {
  this.currentFrame++;
  this.currentTurn = 0;
  this._addBothRollsToScore();
};
