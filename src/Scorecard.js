var Scorecard = function(){
  this.rollScore = [];
};

Scorecard.prototype.logScore = function(score){
  this.rollScore.push(score);
};
