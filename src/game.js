function Game() {
  this.STARTING_SCORE = 0;
  this.FIRST_FRAME = 1;
  this.runningScore = this.STARTING_SCORE;
  this.currentFrame = this.FIRST_FRAME;
};

Game.prototype.frame = function(a,b) {
    this._updateRunningScore(a,b)
    this._updateCurrentFrame();
    return this.frameScore(a,b);
}

Game.prototype._updateCurrentFrame = function() {
  this.currentFrame ++ ;
}

Game.prototype._updateRunningScore = function(a,b) {
  this.runningScore += (a+b);
}

Game.prototype.frameScore = function(a,b) {
  return a+b;
}
