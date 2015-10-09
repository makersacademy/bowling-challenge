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

BowlingScore.prototype.addNewBonusScore = function () {
  console.log(this.rawScores);
  console.log(this.frameScores);

  for (i = 0; i < this.rawScores.length; i++) {
    if (this.rawScores[i] + this.rawScores[i+1] === 10) {
      this.bonusScores.push(this.rawScores[i+2]);
    };
  };
  console.log(this.bonusScores);

};

// BowlingScore.prototype.addNewBonusScore = function () {
//
//   for (i = 0; i < this.rawScores.length; i++) {
//     console.log(this.frameScores)
//     if (this.frameScores[this.frameScores[0] + this.frameScores[1]] === 10) {
//       this.bonusScores.push(this.frameScores[i])
//     };
//   };
// };

// BowlingScore.prototype.addNewBonusScore = function() {
//
//   for (i = 0; i < this.rawScores.length; i++) {
//     // if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
//     if (this.rawScores[0] + this.rawScores[1] === 10) {
//     // console.log(this.rawScores);
//       // this.bonusScores.push(this.frameScores[i+1])
//       // console.log(this.bonusScores);
//     };
//   };
// };
