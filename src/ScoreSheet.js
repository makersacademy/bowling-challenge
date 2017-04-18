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
  var lastRoll = thisFrame[0] + thisFrame[1];
  return lastRoll;
};

ScoreSheet.prototype.factorInStrike = function (frameNumber) {
  this.scoreCard[frameNumber - 1] = [10, this.lookupFrameScore(frameNumber)];
  var lastRoll = this.scoreCard[frameNumber - 1][1];
  if (this.consecutiveStrikes > 1) {
   this.factorInStrikes(frameNumber - 2, (lastRoll +10))
 }
  this.consecutiveStrikes = 0;
};

ScoreSheet.prototype.factorInStrikes = function (frameNumber, lastRoll) {
  if (frameNumber >= 1) {
  this.scoreCard[frameNumber] = [10, lastRoll];
    var i = frameNumber - 1
      for ( i ; i === this.consecutiveStrikes - 1; i--) {
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
