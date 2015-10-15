function ScoreCard() {
  this.scoreArray = [];
  this.lineScore = 0;
  this.currentScore = 0;
  this.currentRound = 1;
  this.special = '';
  this.bonusBalls = 0;
  this.numberOfRounds = 10;
};

ScoreCard.prototype.scoreRound = function(ball1, ball2) {
  this.checkRoundNumber();
  this.checkBonus(ball1);
  this.checkScorePossible(ball1, ball2);
  this.scoreBalls(ball1, ball2);
  this.calculateCurrentScore();
  this.currentRound += 1;
};

ScoreCard.prototype.scoreBalls = function(ball1, ball2) {
  this.isStrike(ball1);
  this.isSpare(ball1, ball2);
  lineScore = this.isSimple(ball1, ball2);
  this.scoreArray[this.currentRound] = [ball1,
                                        ball2,
                                        lineScore,
                                        'Awaiting score',
                                        this.special,];
  this.checkPreviousSpare();
  this.checkPreviousStrike();
};

ScoreCard.prototype.isStrike = function(ball1) {
  if (ball1 === 10) {
    this.special = 'strike';
    if (this.currentRound === this.numberOfRounds) {
      this.bonusBalls = 2;
    };
  };
};

ScoreCard.prototype.isSpare = function(ball1, ball2) {
  if (ball1 != 10 && ball1 + ball2 === 10) {
    this.special = 'spare';
    if (this.currentRound === this.numberOfRounds) {
      this.bonusBalls = 1;
    };
  };
};

ScoreCard.prototype.isSimple = function(ball1, ball2) {
  if (ball1 + ball2 < 10) {
    this.special = '';
    return ball1 + ball2;
  };

  return 0;
};

ScoreCard.prototype.checkScorePossible = function(ball1, ball2) {
  if ((ball1 + ball2) > 10) {
    throw new Error('Score not possible');
  };
};

ScoreCard.prototype.checkRoundNumber = function() {
  if (this.currentRound > this.numberOfRounds + this.bonusBalls) {
    throw new Error('Game over');
  };
};

ScoreCard.prototype.calculateCurrentScore = function() {
  tmpScore = 0;
  for (var i = 1; i <= this.currentRound; i++) {
    tmpScore += this.scoreArray[i][2];
    this.scoreArray[i][3] = tmpScore;
  };

  this.currentScore = tmpScore;
};

ScoreCard.prototype.checkPreviousSpare = function() {
  round = this.currentRound - 1;
  if (this.currentRound > 1 && this.scoreArray[round][4] === 'spare') {
    this.scoreArray[round][2] = this.scoreArray[round][0] +
                                this.scoreArray[round][1] +
                                this.scoreArray[this.currentRound][0];
  };
};

ScoreCard.prototype.checkPreviousStrike = function() {
  roundMinusOne = this.currentRound - 1;
  if (this.currentRound > 1 && this.special != 'strike' &&
                            this.scoreArray[roundMinusOne][4] === 'strike') {
    this.scoreArray[roundMinusOne][2] = this.scoreArray[roundMinusOne][0] +
                                  this.scoreArray[this.currentRound][0] +
                                  this.scoreArray[this.currentRound][1];
  };

  roundMinusTwo = this.currentRound - 2;
  if (this.currentRound > 2 && this.scoreArray[roundMinusTwo][4] === 'strike'
                            && this.scoreArray[roundMinusOne][4] === 'strike') {
    this.scoreArray[roundMinusTwo][2] = this.scoreArray[roundMinusTwo][0] +
                                this.scoreArray[roundMinusOne][0] +
                                this.scoreArray[this.currentRound][0];
  };
};

ScoreCard.prototype.checkBonus = function(ball1) {
  if (this.bonusBalls > 1 && ball1 < 10) {
    this.bonusBalls -= 1;
  };
};
