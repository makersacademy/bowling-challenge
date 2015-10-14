function BowlingScore() {
  this.rolls = [];
  // this.frameTotalScores = 0;
  this.bonusTotalScores = 0;
};

BowlingScore.prototype.roll = function(score) {
  if (score === 10) {
    this.rolls.push(score, null);
  } else {
    this.rolls.push(score);
  };

  // this.makeFrame();
  // this.frameTotal();

};

BowlingScore.prototype.makeFrame = function() {
  this.frameScores = [[this.rolls[0]]];
  for (i = 1; i < this.rolls.length; i++) {
    if (this.frameScores[this.frameScores.length -1].length < 2) {
      this.frameScores[this.frameScores.length -1].push(this.rolls[i])
    } else {
      var currentFrame = [];
      currentFrame.push(this.rolls[i])
      this.frameScores.push(currentFrame);
    };
  };
};

BowlingScore.prototype.isStrike = function (frame) {
    return (frame[0] === 10);
};

BowlingScore.prototype.isSpare = function (frame) {
    return (frame[0] + frame[1] === 10 && !this.isStrike(frame))
};

BowlingScore.prototype.whenStrike = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] === 10) {
      if (this.frameScores[i+1][0] === 10) {
        var total = this.frameScores[i+1][0] + this.frameScores[i+2][0];
        this.bonusTotalScores += total;
      } else {
        var total = this.frameScores[i+1][0] + this.frameScores[i+1][1];
        this.bonusTotalScores += total;
      }
    };
  };
};


BowlingScore.prototype.whenSpare = function () {
  for (i = 0; i < this.frameScores.length -1; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      var total = this.frameScores[i+1][0];
      this.bonusTotalScores += total;
    };
  };
};

BowlingScore.prototype.frameTotal = function () {
  this.total = 0;
  for (i = 0; i < this.rolls.length; i++) {
    this.total += this.rolls[i];
  };
};

BowlingScore.prototype.scores = function () {
  // console.log(this.bonusTotalScores);
  // console.log(this.frameTotalScores);
  return (this.bonusTotalScores + this.frameTotalScores);
};
