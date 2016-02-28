function ScoreSheet(player) {
  this.player = player;
  this.scoreSheet = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.currentFrameNumber = 0;
  this.consecutiveStrikes = 0;
}

ScoreSheet.prototype.spareRollOwed = function (rollScore) {
  var lastFrame = this.getLastFrame()
  if (this.isSpareOwed()) {
    var updatedSecondRoll = (10 - lastFrame[0] + rollScore)
    this.scoreSheet[this.currentFrameNumber - 1] = [lastFrame[0], updatedSecondRoll];
  }

};

ScoreSheet.prototype.isSpareOwed = function () {
  var lastFrame = this.getLastFrame();
  return lastFrame[1] === '/'
};

ScoreSheet.prototype.getLastFrame = function () {
  return this.scoreSheet[this.currentFrameNumber - 1];
};
