
var rollCount = 0;

////////////////////////////////////
function Player() {
}

Player.prototype.roll = function(score) {
  score._previousRoll = score._mostRecentRoll;
  if (rollCount == 0) {
    score._mostRecentRoll = Math.floor(Math.random()*11);

    if (score._mostRecentRoll == 10) {
      score._currentFrame.push(score._mostRecentRoll);
      score._allFrames.push(score._currentFrame);
      score._currentFrame = [];
      rollCount = 0;
      return score._mostRecentRoll;
    };

    score._currentFrame.push(score._mostRecentRoll);
    rollCount += 1;
    return score._mostRecentRoll;
  } else if (rollCount == 1) {
    score._mostRecentRoll = Math.floor(Math.random()*score._previousRoll);
    score._currentFrame.push(score._mostRecentRoll);
    score._allFrames.push(score._currentFrame);
    score._currentFrame = [];
    rollCount = 0;
    return score._mostRecentRoll;
  } else if (rollCount == 2) {
    // return score._mostRecentRoll;
  };



};

Player.prototype.currentFrameStorer = function (score) {

};


////////////////////////////////////
function Score() {
  // Set these to - instead of 0?
    this._mostRecentRoll = '-';
    this._previousRoll = '-';
    this._currentFrame = [];
    this._allFrames = [];
}

Score.prototype.mostRecentRoll = function () {
  return this._mostRecentRoll;
};

Score.prototype.previousRoll = function () {
  return this._previousRoll
};
////////////////////////////////////
