function ScoreCard() {
  this.currentScore = 0;
  this.currentRound = 1;
  this.numberofRounds = 10;
  this.scoreArray = [];
  this.ball1 = 0;
  this.ball2 = 0;
  this.message = '';
  this.stat = 0;
}

ScoreCard.prototype.scoreRound = function() {
  this.checkScore();
  if (this.stat === 0) {
    this.simpleScore();
  };

  if (this.stat === 1) {
    return this.currentRound;
  };

  if (this.stat === 2) {
    this.simpleScore();

    // this.strikeScore();
  };

  if (this.stat === 3) {
    this.simpleScore();

    // this.spareScore();
  };

  this.currentRound += 1;
  return this.checkRound();
};

ScoreCard.prototype.simpleScore = function() {
  this.currentScore += this.addBalls(this.ball1, this.ball2);
  this.scoreArray[this.currentRound] = [this.ball1,
                                        this.ball2,
                                        this.currentScore,];
};

ScoreCard.prototype.checkScore = function() {
  score = this.addBalls(this.ball1, this.ball2);
  if (this.ball1 > 10 || this.ball2 > 10) {
    this.stat = 1;
    return this.message = 'Ball value too great';
  };

  if (score > 10) {
    this.stat = 1;
    return this.message = 'Not a valid score';
  };

  if (this.ball1 === 10) {
    this.stat = 2;
    return this.message = 'Strike';
  };

  if (score === 10) {
    this.stat = 3;
    return this.message = 'Spare';
  };

  this.stat = 0;
  return this.message = '';

};

ScoreCard.prototype.ball1 = function(ball1) {
  this.ball1 = ball1;
};

ScoreCard.prototype.ball2 = function(ball2) {
  this.ball2 = ball2;
};

ScoreCard.prototype.addBalls = function(ball1, ball2) {
  return (ball1 + ball2);
};

ScoreCard.prototype.checkRound = function() {
  if (this.currentRound > this.numberofRounds) {
    return 'Game over';
  } else {
    return this.currentRound;
  }
};
