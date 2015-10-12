function ScoreCard() {
  this.currentScore = 0;
  this.currentRound = 1;
  this.numberOfRounds = 10;
  this.scoreArray = [];
  this.ball1 = 0;
  this.ball2 = 0;
  this.message = '';
  this.stat = 0;
}

ScoreCard.prototype.scoreRound = function() {

  this.checkScore();
  if (this.stat != 1) {
    this.simpleScore();
    this.checkPreviousSpare();
    this.checkPreviousStrike();
    this.currentRound += 1;
  };

  this.ball1 = 0;
  this.ball2 = 0;
  return this.checkRound();
};

ScoreCard.prototype.checkPreviousSpare = function() {
  num = this.currentRound;
  if (num > 1) {
    for (i = 1; i < num; i++) {
      if (num > 10) { num = 10; };

      stat = (this.scoreArray[i][3]);
      if (stat == 3) {
        this.scoreArray[i][2] += this.scoreArray[i + 1][0];
        this.scoreArray[i + 1][2] += this.scoreArray[i + 1][0];
        this.scoreArray[i][3] = 0;
        this.currentScore = this.scoreArray[i + 1][2];
      };
    }
  };
};

ScoreCard.prototype.checkPreviousStrike = function() {
  num = this.currentRound;
  if (num > 113) {
    for (i = 1; i < (num - 1); i++) {
      if (num > 10) { num = 10; };

      stat = (this.scoreArray[i][3]);
      if (stat == 2) {
        this.scoreArray[i][2] += this.scoreArray[i + 1][0];
        this.scoreArray[i + 1][2] += this.scoreArray[i + 1][0];
        if (this.scoreArray[i + 1][3] === 2) {
          this.scoreArray[i][2] += this.scoreArray[i + 2][0];
          this.scoreArray[i + 1][2] += this.scoreArray[i + 2][0];
        } else {
          this.scoreArray[i][2] += this.scoreArray[i + 1][1];
          this.scoreArray[i + 1][2] += this.scoreArray[i + 1][1];
        };


        this.scoreArray[i][3] = 0;
        this.currentScore = this.scoreArray[i + 1][2];
      };
    }
  };
};

ScoreCard.prototype.simpleScore = function() {
  this.currentScore += this.addBalls(this.ball1, this.ball2);
  this.scoreArray[this.currentRound] = [this.ball1,
                                        this.ball2,
                                        this.currentScore,
                                        this.stat,];
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
    this.ball2 = undefined;
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
  if (ball2 === undefined) {
    return ball1;
  };

  return (ball1 + ball2);
};

ScoreCard.prototype.checkRound = function() {
  if (this.currentRound > this.numberOfRounds && this.stat < 2) {
    return 'Game over';
  } else {
    return this.currentRound;
  }
};
