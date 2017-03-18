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
    this.currentFrame++;
    this.currentTurn = 0;
    this.totalScores.push(this.latestRoll)
  }
  else if (this.latestRoll < 10 && this.currentTurn === 0) {
    this.standingPins = this.standingPins - this.latestRoll;
    this.currentTurn++;
    this.latestScore.push(this.latestRoll)
  }
  else if (this.latestRoll <= 10 && this.currentTurn === 1) {
    this.currentFrame++;
    this.currentTurn = 0;
    this.standingPins = 10;
    this.latestScore.push(this.latestRoll);
    this.totalScores.push(this.latestScore);
    this.latestScore = [];
  }
};
