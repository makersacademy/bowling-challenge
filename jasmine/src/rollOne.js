function RollOne(){}
  var score, rolled, scoreCard;

  scoreCard = new ScoreCard;

  RollOne.prototype.roll = function (score) {
    this.score(score);
  };

  RollOne.prototype.score = function (score) {
    scoreCard.rollOneScore(score);
  };
