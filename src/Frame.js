function Frame (roll, frameNumber) {
  this.pinsAvailable = 10 - roll;
  this.rollScores = [roll];
  this.number = frameNumber || 1

};

Frame.prototype.update = function (roll) {
  this.rollScores.push(roll);
};

Frame.prototype.wipePins = function () {
  return this.pinsAvailable -= this.rollScores[0];
};


//
// Frame.prototype.isFrameOver = function () {
//   return this.rollCount === 2 || this.currentPinsAvailable === 0;
// };
//
// Frame.prototype.finishFrame = function (rollScore) {
//     this.updateScoresheet(rollScore);
//     this.currentPinsAvailable = 10;
// };
//
// Frame.prototype.resetRollCount = function () {
//   if (this.isFrameOver()){
//     this.rollCount = 0
//   } else {
//     this.rollCount = 1
//   }
// };
//
//
// Frame.prototype.isSpare = function (rollScore) {
//   return (this.currentPinsAvailable - rollScore === 0) &&
//   this.scoreSheet[this.currentFrameNumber].length === 1
// };
//
// Frame.prototype.isStrike = function (rollScore) {
//   return rollScore === 10
// };
