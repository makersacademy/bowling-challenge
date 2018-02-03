function ScoreCard(){
  this.scoreSoFar = 0;
}

ScoreCard.prototype.rollOneScore = function (score) {
  this.rollOneScore = score;
};

ScoreCard.prototype.scoreSoFar = function () {
  this.scoreSoFar = this.rollOneScore; // + rollTwoScore
};
