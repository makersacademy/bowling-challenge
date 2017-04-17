function BowlingScore() {
  this.rolls = [];
};

BowlingScore.prototype.roll = function(score) {
  if (score === 10) {
    this.rolls.push(score, null);
  } else {
    this.rolls.push(score);
  };

  this.makeFrame();
  this.frameTotal();

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
  for (i = 0; i < this.frameScores.length; i++) {
    return (this.frameScores[i][0] === 10);
  };
};

BowlingScore.prototype.isSpare = function (frame) {
  for (i = 0; i < this.frameScores.length; i++) {
    return (this.frameScores[i][0] + this.frameScores[i][1] === 10 && !this.isStrike(frame))
  };
};

BowlingScore.prototype.isNothing = function (frame) {
    if ( this.isStrike(frame) || this.isSpare(frame) ) {return false;};
    return true;
};

BowlingScore.prototype.addBonus = function(frame) {
  if (this.isStrike(frame)) {this.whenStrike};
  if (this.isSpare(frame)) {this.whenSpare};
  // if (this.isNothing(frame)) {this.bonusTotalScores.push(0);};
};

BowlingScore.prototype.whenStrike = function () {
  if (this.frameScores.length = 3) {
    this.bonusTotalScores = 0;
    for (i = 0; i < this.frameScores.length -1; i++) {
      if (this.frameScores[i][0] === 10) {
        if (this.frameScores[i+1][0] === 10) {
          this.bonusTotalScores += (this.frameScores[i+1][0] + this.frameScores[i+2][0]);
        } else {
          this.bonusTotalScores += (this.frameScores[i+1][0] + this.frameScores[i+1][1]);
        }
      };
    };
  };
};


BowlingScore.prototype.whenSpare = function () {
  this.bonusTotalScores = 0;
  for (i = 0; i < this.frameScores.length -1; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      this.bonusTotalScores += this.frameScores[i+1][0];
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
  return (this.bonusTotalScores + this.frameTotal());
};
