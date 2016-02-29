function ScoreSheet(player) {
  this.player = player;
  this.scoreCard = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.consecutiveStrikes = 0;
  this.spareRollOwed = [];
}

ScoreSheet.prototype.pendingSpare = function (frame) {
  var spareOwed = (frame !== undefined) ? frame : null;
  this.spareRollOwed.push(spareOwed);
};

ScoreSheet.prototype.updateSpare = function (roll) {
  var frameToUpdate = this.spareRollOwed.pop()
  this.scoreCard[frameToUpdate.number] = [10, roll]
};


ScoreSheet.prototype.lookupFrameScore = function (frameNumber) {
  var thisFrame = this.scoreCard[frameNumber]
  var thisFrameScore = thisFrame[0] + thisFrame[1]
  return thisFrameScore;
};

ScoreSheet.prototype.factorInStrikes = function (frameNumber) {
  this.scoreCard[frameNumber - 1] = [10, this.lookupFrameScore(frameNumber)];
  if (this.consecutiveStrikes === 2) {
    this.scoreCard[frameNumber - 2] = [10, this.frameScore(frameNumber - 1)]
  } else {
    var i = frameNumber -3
    for ( i ; i === this.consecutiveStrikes - 2; i--) {
        this.scoreCard[i] = [10, 20];
      }
    }
  this.consecutiveStrikes = 0;
};

ScoreSheet.prototype.gameOver = function () {
  console.log("Game Over")
  console.log(this.finalScore())
};

ScoreSheet.prototype.finalScore = function() {
  var total = [];
  for (var key in this.scoreCard){
    if(this.scoreCard.hasOwnProperty(key)) {
      total.push(this.scoreCard[key]);
      }
    }
  return total.reduce(function(a, b) { return a + b; }, 0);
};



// Player.prototype.showScoreSheet = function () {
//   var scoreSheetRaw = this.playerSS.scoreCard;
//   var frames = [];
//   var frameScores = [];
//   for (var key in scoreSheetRaw) {
//     frames.push(key);
//     ;
//   }
//   var readableFrameScores = [].concat.apply([], frameScores);
//   return console.log(readableFrameScores);
// };

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


//

//

//

//

// };
//
// ScoreSheet.prototype.isSpareOwed = function () {
//   var lastFrame = this.getLastFrame();
//   return lastFrame[1] === '/'
