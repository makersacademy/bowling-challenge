// function BonusChecker () {
// }
//
// BonusChecker.prototype.previousFrame = function() {
//   return this._frames[this.frameNumber -2];
// };
//
// BonusChecker.prototype.secondPreviousFrame = function() {
//   return this._frames[this.frameNumber -3];
// };
//
// BonusChecker.prototype.checkBonus = function(score) {
//   if (this.frameNumber === 1) return;
//   if (this.frame().isComplete()) {
//     if (this.previousFrame().isStrike()) {
//       this.previousFrame().addBonus(this.frame().totalScore);
//     }
//     if (this.frameNumber > 2 && this.secondPreviousFrame().isStrike() && this.previousFrame().isStrike()) {
//       if (this.frameNumber === 10 && this.frame.score2) return;
//       this.secondPreviousFrame().addBonus(10);
//     }
//   }
//   else {
//     if (this.previousFrame().isSpare()) {
//       this.previousFrame().addBonus(bowlingScorecard.frame().score1);
//     }
//   }
// };
