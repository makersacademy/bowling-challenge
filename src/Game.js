function Game() {
  this.currentFrame = 1
  this.latestScore;
  this.standingPins = 10;
  this.currentTurn = 0;
};

Game.prototype.rollBall = function(score) {
  this.latestScore = score;
  // this.currentScore = Math.floor(Math.random() * 11);
  if (this.latestScore === 10 && this.currentTurn === 0) {
    this.currentFrame++;
    this.currentTurn = 0;
  }
  else if (this.latestScore < 10 && this.currentTurn === 0) {
    this.standingPins = this.standingPins - this.latestScore;
    this.currentTurn++;
  }
  else if (this.latestScore <= 10 && this.currentTurn === 1) {
    this.currentFrame++;
    this.currentTurn = 0;
    this.standingPins = 10;
  }
};
