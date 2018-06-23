// function Game() {
//   this.currentFrame = 1;
//   this.previousFrameBonus = false;
// };
//
// Game.prototype.totalScore = 0;
//
// Game.prototype.updateTotalScore = function(score, bonus = false) {
//   // if the previous game was a bonus, add the
//   // new score and this frames score
//   if (this.previousFrameBonus === true) {
//     this.totalScore += score + 10;
//     this.previousFrameBonus = false;
//   }
//
//   if (bonus) {
//     this.previousFrameBonus = true;
//   } else {
//     this.previousFrameBonus = false;
//     this.totalScore += score;
//   }
//
//   this.currentFrame ++;
// };
//
// // if the previous game is a bonus, set previous frame bonus to true
