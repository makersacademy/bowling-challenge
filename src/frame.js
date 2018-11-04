function Frame(scores) {
  this.roll1 = scores[0];
  this.roll2 = scores[1];
  this.roll3 = scores[2];
  this.isSpare;
  this.isStrike;
  this.score = 0;
  this.bonus = 0;
  this.totalScore;
  this.calculateFrameType();
  // this.calculateFrameScore(scores);
}

Frame.prototype.calculateFrameType = function () {
  if (this.roll1 === 10) {
    this.isStrike = true;
  } else if (this.roll1 + this.roll2 === 10) {
    this.isSpare = true;
  }
};

// Sum function

// Frame.prototype.calculateFrameScore = function (scores) {
//   this.score = scores.reduce(add, 0);
// };
// 
// function add(a, b) {
//     return a + b;
// }
