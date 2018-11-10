function Frame(scoreCard = new ScoreCard(), frameScore = new FrameScore(), scoreLogic = new ScoreLogic()) {
  this.STARTING_SCORE = 0
  this.FIRST_FRAME = 1
  this.runningScore = this.STARTING_SCORE
  this.currentScore = this.STARTING_SCORE
  this.currentFrame = this.FIRST_FRAME
  this.scoreCard = scoreCard
  this.frameScore = frameScore
  this.scoreLogic = scoreLogic
};

Frame.prototype.information = function(a,b) {
    this._updateCurrentScore(a,b);
    this._updateRunningScore(a,b);
    this._updateScoreCard(a,b);
    this._updateCurrentFrame();
}

Frame.prototype._updateCurrentScore = function(a,b) {
  this.currentScore = this.scoreLogic.frame(a,b)
}

Frame.prototype._updateRunningScore = function(a,b) {
  if (Number.isInteger(this.currentScore)) {
    this.frameScore.continue(a,b);
    this.runningScore = this.frameScore._currentScore
  } else {
    this.frameScore.score(this.currentScore);
    this.runningScore = this.frameScore._currentScore
  }}

Frame.prototype._updateCurrentFrame = function() {
  this.currentFrame ++ ;
}

Frame.prototype._updateScoreCard = function(a,b) {
  array = new Array();
  array['frame'] = this.currentFrame;
  array['bowl1'] = a;
  array['bowl2'] = b;
  array['currentScore'] = this.currentScore;
  array['runningScore'] = (Number.isInteger(this.currentScore) ? this.runningScore : "");
  this.scoreCard.card.push(array);
}
