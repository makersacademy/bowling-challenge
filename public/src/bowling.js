function Bowling() {
  this._totalScore = 0;
  this._currentFrameScore = 0;
  this._previousFrameScore = 0;
  this._currentFrameComplete = false;
  this._completedFrames = []
  this._gameCompleted = false;
}
var bowling = new Bowling ();

Bowling.prototype.playerFirstRoll = function (pins) {
  if (this._currentFrameScore && this._completedFrames[-1] === 10) {
    this._currentFrameScore += pins + 10;
    bowling.playerSecondRoll(0);
  } else if (this._completedFrames[-1] === 10) {
    this._currentFrameScore += (pins + this._previousFrameScore);
    bowling.playerSecondRoll(0);
} else if (this._currentFrameScore === 10) {
    this._currentFrameScore += pins;
    bowling.playerSecondRoll(0);
  } else {
    this._currentFrameScore += pins;
  }
}

Bowling.prototype.playerSecondRoll = function (pins) {
  this._currentFrameScore += pins;
  this._currentFrameComplete = true;
}

Bowling.prototype.completeFrame = function () {
  this._totalScore += this._currentFrameScore;
  this._previousFrameScore += this._currentFrameScore;
  this._completedFrames.push(this._currentFrameComplete);
  if (this._completedFrames.length === 10) {
    this._gameCompleted = true;
  }
}

Bowling.prototype.totalScore = function () {
  return this._totalScore
}
