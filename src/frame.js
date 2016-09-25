'user strict';

function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.frameContent = [];
  this._isFrameOver = false;
};

Frame.prototype = {
  isFirstRoll: function() {
    return this.frameContent.length === 0;
  },
  isSecondRoll: function() {
    return this.frameContent.length === 1
  },
  isBonunsRollInLastFrame: function() {
    return this.frameNumber === 10 && this.frameContent.length === 2
  },
  isFrameOver: function() {
    return this._isFrameOver;
  },
  getPinsDown: function() {
    return this.frameContent[this.frameContent.length - 1];
  },
  roll: function() {
    if (this.isFirstRoll()) {
      var pinsDown = Math.floor(Math.random() * 11);
      this.frameContent.push(pinsDown);
      if (pinsDown === 10 && this.frameNumber !== 10) { this._isFrameOver = true; }
      // return pinsDown;
    }
    else if (this.isSecondRoll()){
      var availablePins = 10 - this.frameContent[0];
      if (this._isStrikeInFirstRollOfLastFrame()) { availablePins = 10 }
      var pinsDown = Math.floor(Math.random() * (availablePins + 1));
      this.frameContent.push(pinsDown);
      if (this.frameNumber !== 10) { this._isFrameOver = true; }
      else if (this.frameNumber === 10 && ( (this.frameContent[0] + this.frameContent[1] !== 10) && this.frameContent[0] !== 10 && this.frameContent[1] !== 10) ) {
        this._isFrameOver = true;
      }
      // return pinsDown;
    }
    else if (this.isBonunsRollInLastFrame()) {
      var availablePins = 10 - this.frameContent[1];
      if (this.frameContent[1] === 10) { availablePins = 10 }
      var pinsDown = Math.floor(Math.random() * (availablePins + 1));
      this.frameContent.push(pinsDown);
      this._isFrameOver = true;
      // return pinsDown;
    }
    return this.frameContent[this.frameContent.length - 1]
  },
  _isStrikeInFirstRollOfLastFrame: function() {
    return this.frameNumber === 10 && this.frameContent[0] === 10
  }
}
