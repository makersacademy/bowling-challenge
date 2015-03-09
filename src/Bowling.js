var Scorecard = function() {
  this.totalScore = 0;
  this.currentFrame = 1;
  this.bowlNumber = 1;
  this.gameOver = false;
};

Scorecard.prototype.addPoint = function(points) {
  this.totalScore += points;
  this.switchBowlNumber();
  this.updateFrame();
};

Scorecard.prototype.switchBowlNumber = function() {
  (this.bowlNumber === 1) ? this.bowlNumber = 2 : this.bowlNumber = 1;
};

Scorecard.prototype.updateFrame = function() {
  if(this.bowlNumber === 1 && this.gameOver !== true ) {
    this.currentFrame += 1;
    this.isGameOver();
  }
};

Scorecard.prototype.isGameOver = function() {
  if(this.currentFrame >= 10) {
    this.gameOver = true;
  }
};