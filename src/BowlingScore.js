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

BowlingScore.prototype.makeFrameScores = function() {
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
  this.score =
    (this.frameTotals.reduce(function (x,y) {
      return x+y
    })
    + this.bonusScores.reduce(function (x,y) {
      return x+y
    }));
  console.log(this.frameTotals);
  console.log(this.bonusScores);

};

// BowlingScore.prototype.strike = function () {
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
// BowlingScore.prototype.spare = function () {
//   for (i = 0; i < this.frameScores.length; i++) {
//     if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
//       this.bonusScores.push(this.frameScores[i+1][0]);
//     };
//   };
// };




// BowlingScore.prototype.runningTotal = function () {
//   this.runningTotals.push(this.frameTotals[0]);
//   for (i = 0; i < this.frameTotals.length -1; i++) {
//     if (this.frameScores[i][0] === 10) {
//       this.runningTotals.push(this.runningTotals[i] + this.frameTotals[i+1]);
//     } else {
//       this.runningTotals.push(this.runningTotals[i] + this.frameTotals[i+1] + this.bonusScores[i+1]);
//     }
//   };
// };


// BowlingScore.prototype.runningTotal = function () {
  // this.runningTotals.push(this.frameTotals[0]);
    // for (i = 0; i < this.frameScores.length -1; i++) {

    // if (this.frameScores[i][0] === 10) {
    //   this.runningTotals.push(this.runningTotals[i] + this.frameTotals[i+1]);
      // this.runningTotals.push(this.runningTotals[i] + this.bonusScores[i] + this.bonusScores[i+1]);
    // } else if (this.frameScores[i][0] + this.frameScores[i][1] === 10){
    //   this.runningTotals.push(this.runningTotals[i] + this.frameTotals[i+1] + this.bonusScores[i]);
    // } else {
    //   this.runningTotals.push(this.runningTotals[i] + this.frameTotals[i+1]);
    // }
  // };
// };

// BowlingScore.prototype.runningTotal = function () {
//
//   for (i = 0; i < this.frameScores.length; i++){
//     if (this.frameScores[i][0] + this.frameScores[i][1] === 10){
//       this.runningTotals.push(this.runningTotals[i-1] + this.frameTotals[i] + this.bonusScores[i]);
//     } else {
//       this.runningTotals.push(this.runningTotal[i-1] + this.frameTotals[i]);
//     }
//   };
//   console.log(this.frameTotals);
//   console.log(this.bonusScores);
// };
