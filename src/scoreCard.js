var ScoreCard = function () {
  this.score = 0;
};

ScoreCard.prototype.calculateScore = function(ball1, ball2, hasSpare, hasStrike) {
  if (hasSpare === false && hasStrike === false) {
    this.score += ball1 + ball2;
    return ball1 + ball2;
  }else if (hasSpare === true){
    return (ball1 * 2) + ball2;
  }else{
    return (ball1 + ball2)*2;
  };
};
