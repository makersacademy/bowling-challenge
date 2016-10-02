'user strict';

function Frame() {
  this.frameNumber = 0;
  this.frameContent = [];
  this._isFrameOver = false;
  this._rollNumber = 0;
};

Frame.prototype = {
  isFirstRoll: function() {
    return this.frameContent.length === 0;
  },
  isSecondRoll: function() {
    return this.frameContent.length === 1;
  },
  isBonunsRollInLastFrame: function() {
    return this.frameNumber === 10 && this.frameContent.length === 2;
  },
  isFrameOver: function() {
    return this._isFrameOver;
  },
  setFrameNumber: function(frameNumber) {
    this.frameNumber = frameNumber;
  },
  roll: function() {
    if (this.isFirstRoll()) {
      this._rollNumber++;
      if (this._getRollResult(10) === 10 && this.frameNumber !== 10) { this._setFrameEnded(); }
    }
    else if (this.isSecondRoll()){
      this._rollNumber++;
      var availablePins = this._isStrikeInFirstRollOfLastFrame() ? 10 : (10 - this._getLastItemInFrame());
      this._getRollResult(availablePins);
      if (this.frameNumber !== 10 || !this._isBonusRollAvailableInLastFrame()) { this._setFrameEnded(); }
    }
    else if (this.isBonunsRollInLastFrame()) {
      this._rollNumber++;
      availablePins = (this._getLastItemInFrame() === 10) ? 10 : (10 - this._getLastItemInFrame());
      this._getRollResult(availablePins);
      this._setFrameEnded();
    }
    return this._getPinsDown();
  },
  getRollNumber: function() {
    return this._rollNumber;
  },
  _isStrikeInFirstRollOfLastFrame: function() {
    return this.frameNumber === 10 && this.frameContent[0] === 10;
  },
  _getPinsDown: function() {
    return this._getLastItemInFrame();
  },
  _getRollResult: function(availablePins) {
    this.frameContent.push(Math.floor(Math.random() * (availablePins + 1)));
    return this._getLastItemInFrame();
  },
  _getLastItemInFrame: function() {
    return this.frameContent[this.frameContent.length - 1];
  },
  _setFrameEnded: function() {
    this._isFrameOver = true;
  },
  _isBonusRollAvailableInLastFrame: function() {
    return (this.frameNumber === 10 && (this._isItASpare() || this._isOneOfTheRollsAStrike()) );
  },
  _isOneOfTheRollsAStrike: function() {
    return this.frameContent[0] === 10 || this.frameContent[1] === 10;
  },
  _isItASpare: function() {
    return (this.frameContent[0] + this.frameContent[1] === 10);
  }
}
