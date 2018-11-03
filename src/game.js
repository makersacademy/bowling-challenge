function Game(scoreCard = new ScoreCard()) {
  this.STARTING_SCORE = 0;
  this.FIRST_FRAME = 1;
  this.runningScore = this.STARTING_SCORE;
  this.frameScore = 0;
  this.currentFrame = this.FIRST_FRAME;
  this.scoreCard = scoreCard;
};

Game.prototype.frame = function(a,b) {
    this._updateFrameScore(a,b);
    this._updateRunningScore(a,b);
    this._updateScoreCard(a,b);
    this._updateCurrentFrame();
    return this.frameScore;
}

Game.prototype._updateScoreCard = function(a,b) {
  array = new Array();
  array['frame'] = this.currentFrame;
  array['bowl1'] = a;
  array['bowl2'] = b;
  array['frameScore'] = this.frameScore;
  array['runningScore'] = this.runningScore;
  this.scoreCard.card.push(array);
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
