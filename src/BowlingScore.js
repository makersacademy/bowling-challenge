function BowlingScore() {
  this.score = 0;
  this.rolls = [];
  // this.frameScores = [];
  this.bonusScores = [];
  this.allFrames = [];
  this.frameTotalScores = 0;
  this.bonusTotalScores = 0;
};

BowlingScore.prototype.roll = function(score) {
  if (score === 10) {
    this.rolls.push(score, null);
  } else {
    this.rolls.push(score);
  };

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

BowlingScore.prototype.isStrike = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] === 10) {
      if (this.frameScores[i+1][0] === 10) {
        return true;
      } else {
        return true;
      };
    };
    return false;
  };
};

BowlingScore.prototype.strikeBonusAndFrame = function () {
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

BowlingScore.prototype.isSpare = function () {
  for (i = 0; i < this.frameScores.length -1; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      return true;
    };
    return false;
  };
};

BowlingScore.prototype.spareBonusAndFrame = function () {
  for (i = 0; i < this.frameScores.length -1; i++) {
    if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      var total = this.frameScores[i+1][0];
      this.bonusTotalScores += total;
    };
  };
};

BowlingScore.prototype.frameBonus = function () {

  for (i = 0; i < this.frameScores.length; i++) {
    if (this.frameScores[i][0] === 10 && this.frameScores[i+1][0] != 10) {
      this.bonusScores.push(this.frameScores[i+1][0]);
      this.bonusScores.push(this.frameScores[i+1][1]);
    } else if (this.frameScores[i][0] == 10 && this.frameScores[i+1][0] === 10) {
      this.bonusScores.push(this.frameScores[i+1][0]);
      this.bonusScores.push(this.frameScores[i+2][0]);
    } else if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      this.bonusScores.push(this.frameScores[i+1][0]);
    } else {
      this.bonusScores.push(0)
    };
  };
};

BowlingScore.prototype.frameTotal = function () {
  for (i = 0; i < this.frameScores.length; i++) {
    var total = this.frameScores[i][0] + this.frameScores[i][1]
    this.frameTotalScores += total;
  };
};

BowlingScore.prototype.scores = function () {
  return game.frameBonus() + game.frameTotal();
  game.frameTotal();
  this.bonusTotalScore();
  this.frameTotalScore();
  console.log(this.frameTotalScores);
  console.log(this.bonusTotalScores);
  return (this.frameTotalScores + this.bonusTotalScores);
};
