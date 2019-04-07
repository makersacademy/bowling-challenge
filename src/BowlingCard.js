// debugger;
// "use strict";

// // the SCORECARD
// function Scorecard() {
//   this.turn = 1;
//   this.total = 0;
//   this.gameFrames = (0);
//   this.frame = this.gameFrames.length;
// };

// // this represents the score on each roll of the ball.
// Scorecard.prototype.roll = function() {
//   if (this.turn === 1) {
//     this.turn = 2;
//   } else {
//     this.turn = 1;
//     // end the game if we are at the 10th frame.
//     if (this.frame == 10) {
//       this.isComplete = true;
//     };
//     this.isComplete;
//     this.frame += 1;
//   };
// };

// // this represent whether game is over.
// Scorecard.prototype.isComplete = function() {
//   if (this.frame = 11) {
//     // if game has ended print the total score and end the game.
//     console.log(this.total);
//     return true;
//   } else {
//     // else print the score and keep iterating up frames.
//     console.log(this.total);
//     return false;
//   };
// };
