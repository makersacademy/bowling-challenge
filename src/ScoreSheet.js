function ScoreSheet(player, frame) {
  this.player = player;
  this.scoreCard = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.spareRollOwed = this.pendingSpare(frame);
  this.pendingStrikes = [];
}


ScoreSheet.prototype.pendingSpare = function (frame) {
  return (frame !== undefined) ? this.scoreCard[frame.number] : null;
};

ScoreSheet.prototype.consecutiveStrikes = function (frame) {
  this.pendingStrikes.push(this.scoreCard[frame.number]);
};

ScoreSheet.prototype.updateSpare = function (roll) {
  return this.pendingSpare.rollScore[1] + roll;
};


// ScoreSheet.prototype.spareRollOwed = function (rollScore) {
//   var lastFrame = this.getLastFrame()
//   if (this.pendingSpare()) {
//     var updatedSecondRoll = (10 - lastFrame[0] + rollScore)
//     this.scoreCard[this.currentFrameNumber - 1] = [lastFrame[0], updatedSecondRoll];
//   }
// //
// Game.prototype.addFrameScore = function() {
//   this.endGame();
//   this.frame.checkStrike();
//   this.frame.checkSpare();
//   this.frame.checkScore();
//   this.scorecard.push(this.frame.totalScore);
// };
//
// Game.prototype.endGame = function() {
//   if (this.scorecard.length >= 10) return 'GAME OVER';
//   this.finalScore();
// };
//
// Game.prototype.finalScore = function() {
//   this.final = this.scorecard.reduce(function(a, b) { return a + b; }, 0);
//   console.log(this.scorecard);
// };


//
// ScoreSheet.prototype.lookupFrameScore = function (frameNo) {
//   var thisFrame = this.scoreSheet[frameNo]
//   var thisFrameScore = thisFrame[0] + thisFrame[1]
//   return thisFrameScore;
// };
//

//
// ScoreSheet.prototype.factorInStrikes = function (consecutiveStrikes) {
//   var frameNumber = this.currentFrameNumber;
//   this.scoreSheet[frameNumber - 1] = [10, this.frameScore(frameNumber)];
//
//   if (consecutiveStrikes === 2) {
//     this.scoreSheet[frameNumber - 2] = [10, this.frameScore(frameNumber - 1)]
//   } else {
//     var i = frameNumber -3
//     for ( i ; i === consecutiveStrikes - 2; i--) {
//         this.scoreSheet[i] = [10, 20];
//       }
//     }
//   this.consecutiveStrikes = 0;
// };
//

// };
//
// ScoreSheet.prototype.isSpareOwed = function () {
//   var lastFrame = this.getLastFrame();
//   return lastFrame[1] === '/'
