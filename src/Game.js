function Game() {
  this.currentFrame = 1
  this.currentScore;
  this.standingPins = 0
  this.currentTurn = 0
};

Game.prototype.rollBall = function(score) {
  this.currentScore = score
  // this.currentScore = Math.floor(Math.random() * 11);
  if (this.currentScore === 10 && this.currentTurn === 0) {
    this.currentFrame++;
    this.currentTurn = 0;
  }
  else if (this.currentScore < 10 && this.currentTurn === 0) {
    this.standingPins = (10 - this.currentScore)
    this.currentTurn++;
  }
  else if (this.currentScore <= 10 && this.currentTurn === 1) {
    this.currentFrame++;
  }
};

// Game.prototype.rollScore() = function(){
//     this.frameScore = Math.floor(Math.random() * 11);
// };
