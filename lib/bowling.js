function Score() {
  // Set these to - instead of 0?
    this._mostRecentRoll = 0;
    this._previousRoll = 0;
    this._currentFrame = [];
    this._allFrames = [];
    this._rollsMadeThisFrame = 0;
};

Score.prototype.roll = function (pinsDown) {
  this._previousRoll = this._mostRecentRoll;
  this._mostRecentRoll = pinsDown;
  if (this._rollsMadeThisFrame == 0) {
        if (pinsDown === 10) {
          this.framePusher(pinsDown);
          return
        };
      this._currentFrame.push(pinsDown);
      this._rollsMadeThisFrame += 1;
  } else if (this._rollsMadeThisFrame == 1) {
      this.framePusher(pinsDown);

}};

Score.prototype.framePusher = function (pinsDown) {
  this._currentFrame.push(pinsDown);
  this._allFrames.push(this._currentFrame);
  this._currentFrame = [];
  this._rollsMadeThisFrame = 0;
};

Score.prototype.mostRecentRoll = function () {
  return this._mostRecentRoll;
};

Score.prototype.previousRoll = function () {
  return this._previousRoll;
};

Score.prototype.allFrames = function () {
  return this._allFrames;
};

Score.prototype.currentFrame = function () {
  return this._currentFrame;
};

// Score.prototype.knockedPins = function (modifier) {
//   score._mostRecentRoll = Math.floor(Math.random()*modifier);
//   return score._mostRecentRoll;
// };

    // this.knockedPins(11-this._previousRoll);

  // } else if (rollsMadeThisFrame == 2) {
  //   // return this._mostRecentRoll;
  // };
