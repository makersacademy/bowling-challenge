var Scorecard = function(){
  this.rollScore = [];
  this.frameScore = [];
  this.frame = 2;
};

Scorecard.prototype.logScore = function(score){
  this.rollScore.push(score);
  this._oneRollDown();
};

Scorecard.prototype.updateFrameScore = function(){
  var numScore = this.rollScore.length;
  var firstScore = this.rollScore.slice(numScore-1)[0];
  var secondScore = this.rollScore.slice(numScore-2)[0];
  this.frameScore.push(firstScore + secondScore);
};

Scorecard.prototype.calculateTotalScore = function(){
  var totalScore = 0
  this.frameScore.forEach(function(i){
    totalScore += i;
  });
  return totalScore;
};

Scorecard.prototype.refreshScores = function(score){
  this.logScore(score);
  if (this._isEndOfFrame) {
    this.updateFrameScore();
  };
  this._startsNewFrame();
};

Scorecard.prototype._oneRollDown = function(){
  this.frame -= 1;
};

Scorecard.prototype._isEndOfFrame = function(){
  this.frame === 0;
};

Scorecard.prototype._startsNewFrame = function(){
  this.frame = 2;
};
