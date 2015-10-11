function BowlingScore() {
  this.score = 0;
  this.rolls = [];
  this.bonusScores = [];
  this.frameTotals = [];
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
    this.frameTotals.push(this.frameScores[i][0] + this.frameScores[i][1]);
  };
};

BowlingScore.prototype.scores = function () {
  this.score = (this.frameTotals.reduce(function (x,y) {
      return x+y
    })
    + this.bonusScores.reduce(function (x,y) {
      return x+y
    })
  );
};
