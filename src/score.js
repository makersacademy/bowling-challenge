var Score = function(){
  this.totalScore = 0;
};

Score.prototype.getScore = function () {
  return this.totalScore;
};

Score.prototype.input = function (score) {
  this.totalScore += score
};
