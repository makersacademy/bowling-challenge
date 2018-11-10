function Frame(scoreCard = new ScoreCard(), frameScore = new FrameScore(), runningScore = new RunningScore()) {
  this.STARTING_SCORE = 0
  this.FIRST_FRAME = 1
  this.currentRunningScore = this.STARTING_SCORE
  this.currentScore = this.STARTING_SCORE
  this.currentFrame = this.FIRST_FRAME
  this.scoreCard = scoreCard
  this.frameScore = frameScore
  this.runningScore = runningScore
};

Frame.prototype.information = function(a,b) {
    this._updateCurrentScore(a,b);
    console.log("current runningScore" + this.currentRunningScore)
    this._updateRunningScore(a,b);
    console.log("new runningScore" + this.currentRunningScore)
    this._updateScoreCard(a,b);
    this._updateCurrentFrame();
}

Frame.prototype._updateCurrentScore = function(a,b) {
  this.currentScore = this.frameScore.frame(a,b)
}

Frame.prototype._updateRunningScore = function(a,b) {
  if (this.currentScore === ("Spare" || "Strike")) {
    this.runningScore.spareOrStrike(this.currentScore);
  } else {
    this.currentRunningScore = this.runningScore.updateRuningScore(a,b);
  }
}

Frame.prototype._updateCurrentFrame = function() {
  this.currentFrame ++ ;
}

Frame.prototype._updateScoreCard = function(a,b) {
  array = new Array();
  array['frame'] = this.currentFrame;
  array['bowl1'] = a;
  array['bowl2'] = b;
  array['currentScore'] = this.currentScore;
  array['runningScore'] = (Number.isInteger(this.currentScore) ? this.currentRunningScore : "");
  this.scoreCard.card.push(array);
}
