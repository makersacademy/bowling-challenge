var Scorecard = function(){
  this.rollScore = [];
  this.frameScore = [];
};

Scorecard.prototype.logScore = function(score){
  this.rollScore.push(score);
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
