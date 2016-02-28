function Game(player) {
  this.player = player;
  this.scoreSheet = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.currentPinsAvailable = 10;
  this.currentFrameNumber = 0;
  this.consecutiveStrikes = 0;
}

Game.prototype.newFrame = function (rollScore) {
  this.currentFrameNumber += 1;
  this.updateScoresheet(rollScore);
  if (this.currentFrameNumber > 1) {
    this.spareRollOwed(rollScore);
  }

  this.wipePins(rollScore);
};

Game.prototype.spareRollOwed = function (rollScore) {
  var lastFrame = this.getLastFrame()
  if (this.isSpareOwed()) {
    var updatedSecondRoll = (10 - lastFrame[0] + rollScore)
    this.scoreSheet[this.currentFrameNumber - 1] = [lastFrame[0], updatedSecondRoll];
  }

};

Game.prototype.isSpareOwed = function () {
  var lastFrame = this.getLastFrame();
  return lastFrame[1] === '/'
};

Game.prototype.getLastFrame = function () {
  return this.scoreSheet[this.currentFrameNumber - 1];
};

Game.prototype.wipePins = function (rollScore) {
  this.currentPinsAvailable -= rollScore;
};

Game.prototype.finishFrame = function (rollScore) {
    this.updateScoresheet(rollScore);
    this.currentPinsAvailable = 10;
};


Game.prototype.updateScoresheet = function (rollScore) {
    if (this.isStrike(rollScore)) {
      this.consecutiveStrikes +=1;
      this.scoreSheet[this.currentFrameNumber].push('X');
      this.finishFrame('pending')
  } else if (this.isSpare(rollScore)){
      this.scoreSheet[this.currentFrameNumber].push('/');
  } else {
      this.scoreSheet[this.currentFrameNumber].push(rollScore)
      if (this.isReadyForBonusScore(rollScore)){
        this.factorInStrikes(this.consecutiveStrikes)
      }

  }
};



Game.prototype.frameScore = function (frameNo) {
  var thisFrame = this.scoreSheet[frameNo]
  var thisFrameScore = thisFrame[0] + thisFrame[1]

  return thisFrameScore;
};


Game.prototype.factorInStrikes = function (consecutiveStrikes) {
  var frameNumber = this.currentFrameNumber;
  this.scoreSheet[frameNumber - 1] = [10, this.frameScore(frameNumber)];

  if (consecutiveStrikes === 2) {
    this.scoreSheet[frameNumber - 2] = [10, this.frameScore(frameNumber - 1)]
  } else {
    var i = frameNumber -3
    for ( i ; i === consecutiveStrikes - 2; i--) {
        this.scoreSheet[i] = [10, 20];
      }
    }
  this.consecutiveStrikes = 0;
};

// Game.prototype.factorInSpares = function () {
//
// };

Game.prototype.isSpare = function (rollScore) {
  return (this.currentPinsAvailable - rollScore === 0) &&
  this.scoreSheet[this.currentFrameNumber].length === 1
};

Game.prototype.isStrike = function (rollScore) {
  return rollScore === 10
};

Game.prototype.isReadyForBonusScore = function (rollScore) {
  return (rollScore !== 'pending') &&
  (this.consecutiveStrikes >= 1) &&
  (this.scoreSheet[this.currentFrameNumber].length === 2) &&
  !this.isSpareOwed(rollScore);
};
