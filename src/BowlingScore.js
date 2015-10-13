function BowlingScore() {
  this.score = 0;
  this.rolls = [];
  // this.frameScores = [];
  this.bonusScores = [];
  this.frameTotals = [];
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
    if (this.frameScores[i][1] === null) {
      return true;
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
  for (i = 0; i < this.frameTotals.length; i++) {
    this.frameTotals.push(this.frameScores[i][0] + this.frameScores[i][1]);
  };
};

BowlingScore.prototype.frameTotalScore = function () {
  var total = this.frameTotals.reduce(function(x,y){return (x + y)}, 0);
  this.frameTotalScores = total;
};

BowlingScore.prototype.bonusTotalScore = function () {
  var total = this.bonusScores.reduce(function(x,y){return (x + y)})
  this.bonusTotalScores = total;
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

// BowlingScore.prototype.update = function (newRoll) {
//   this.roll(newRoll);
//   this.makeFrame();
//   this.frameBonus();
//   this.frameTotal();
//   this.frameTotalScore()
//   this.bonusTotalScore();
//   this.scores();
// };

// BowlingScore.prototype.isStrike = function () {
//   for (i = 0; i < this.frameScores.length; i++) {
//     if (this.frameScores[i][1] === null) {
//       return true;
//     };
//   };
// };

// BowlingScore.prototype.isSpare = function () {
//   for (i = 0; i < this.frameScores.length; i++) {
//     if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
//       return true;
//     };
//   };
// };

// BowlingScore.prototype.Strike = function () {
//   for (i = 0; i < this.frameScores.length; i++) {
//     if (this.frameScores[i][0] === 10) {
//       if (this.frameScores[i+1][0] === 10) {
//         this.bonusScores.push(this.frameScores[i+1][0]);
//         this.bonusScores.push(this.frameScores[i+2][0]);
//       } else {
//         this.bonusScores.push(this.frameScores[i+1][0]);
//         this.bonusScores.push(this.frameScores[i+1][1]);
//       };
//     };
//   }
// };
//
// BowlingScore.prototype.Spare = function () {
//   for (i = 0; i < this.frameScores.length; i++) {
//     if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
//       this.bonusScores.push(this.frameScores[i+1][0]);
//     };
//   };
// };
