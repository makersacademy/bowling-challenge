var Scorecard = function(){
  this.rollScore = [];
  this.frameScore = [];
  this.rollLeftInFrame = 2;
  this.isSpare = false;
};

Scorecard.prototype.logScore = function(score){
  this.rollScore.push(score);
  this._oneRollDown();
};

Scorecard.prototype.updateFrameScore = function(){
  var numScore = this.rollScore.length;
  var firstScore = this.rollScore.slice(numScore-2)[0];
  var secondScore = this.rollScore.slice(numScore-1)[0];
  this.frameScore.push(firstScore + secondScore);
  if ((firstScore + secondScore) === 10) {
    this._switchSpare();
  };
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
  if (this.isSpare) {
    this.frameScore[this.frameScore.length-1] += score;
    this._switchSpare();
  };
  if (this._isEndOfFrame()) {
    this.updateFrameScore();
    this._startsNewFrame();
  };
};

Scorecard.prototype._oneRollDown = function(){
  this.rollLeftInFrame -= 1;
};

Scorecard.prototype._isEndOfFrame = function(){
  return this.rollLeftInFrame === 0;
};

Scorecard.prototype._startsNewFrame = function(){
  this.rollLeftInFrame = 2;
};

Scorecard.prototype._switchSpare = function(){
  this.isSpare = !this.isSpare;
};
