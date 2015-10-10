function BowlingScore() {
  this.rawScores = [];
  this.bonusScores = [];
};

BowlingScore.prototype.addNewRoundScore = function(score) {
  if (score === 10) {
    this.rawScores.push(score, null);
  } else {
    this.rawScores.push(score);
  };
};

BowlingScore.prototype.makeFrameScores = function() {
  this.frameScores = [[this.rawScores[0]]];
  for (i = 1; i < this.rawScores.length; i++) {
    if (this.frameScores[this.frameScores.length -1].length < 2) {
      this.frameScores[this.frameScores.length -1].push(this.rawScores[i])
    } else {
      var currentFrame = [];
      currentFrame.push(this.rawScores[i])
      this.frameScores.push(currentFrame);
    };
  };
};

BowlingScore.prototype.Spare = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      this.bonusScores.push(this.frameScores[i+1][0]);
    };
  };
};

BowlingScore.prototype.isSpare = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      return true;
    };
  };
};


BowlingScore.prototype.isStrike = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][1] === null) {
      return true;
    };
  };
};

BowlingScore.prototype.Strike = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] === 10) {
      if (this.frameScores[i+1][0] === 10) {
        this.bonusScores.push(this.frameScores[i+1][0]);
        this.bonusScores.push(this.frameScores[i+2][0]);
      } else {
        this.bonusScores.push(this.frameScores[i+1][0]);
        this.bonusScores.push(this.frameScores[i+1][1]);
      };
    };
  }
};
