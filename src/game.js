function Game() {
  this.STARTING_SCORE = 0;
  this.FIRST_FRAME = 1;
  this.runningScore = this.STARTING_SCORE;
  this.frameScore = 0;
  this.currentFrame = this.FIRST_FRAME;
  this.scoreCard = [];
};

Game.prototype.frame = function(a,b) {
    this._updateFrameScore(a,b);
    this._updateRunningScore(a,b);
    this._updateScoreCard();
    this._updateCurrentFrame();
    return this.frameScore;
}

Game.prototype._updateScoreCard = function() {
  a = new Array();
  a['frame'] = this.currentFrame;
  a['frameScore'] = this.frameScore;
  a['runningScore'] = this.runningScore;
  this.scoreCard.push(a);
}

Game.prototype._updateCurrentFrame = function() {
  this.currentFrame ++ ;
}

Game.prototype._updateRunningScore = function(a,b) {
  this.runningScore += (a+b);
}

Game.prototype._updateFrameScore = function(a,b) {
  this.frameScore = a+b;
}
