function Roll(){}
  var score, scoreCard;

  // scoreCard = new ScoreCard();

  Roll.prototype.roll = function(score) {
    this.score(score);
  };

  Roll.prototype.score = function (score) {
    // scoreCard.rollOneScore(score);
    this.score = score;

  };
