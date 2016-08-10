function Scorecard() {
  this._currentFrame = 1;
  this._currentRoll = 1;
  this._pinsLeft = 10;
  this._score = 0;
  this._hasBonusPoints = 0;
  this._frames = {};
};

Scorecard.prototype = {

  receiveScore: function(pinsDown) {
    if (this._currentFrame > 10) {
      return false;
    }
    this._pinsLeft -= pinsDown;
    this._addScore(pinsDown);
    this._giveBonusPoints();
    this._addToFrame(pinsDown);
    this._moveForward();
  },

  getPinsLeft: function() {
    return this._pinsLeft;
  },

  getCurrentRoll: function() {
    return this._currentRoll;
  },

  getScore: function() {
    return this._score;
  },

  getFrame: function(number) {
    if (this._frames[number]) {
      return this._frames[number];
    }
    return this._frames[number] = {};
  },

  getCurrentFrame: function() {
    return this.getFrame(this._currentFrame);
  },

  getAllFrames: function() {
    return this._frames;
  },

  getCurrentFrameNumber: function() {
    return this._currentFrame;
  },

  // PRIVATE METHODS

  _giveBonusPoints: function() {
    if (this._currentRoll === 1 && this._pinsLeft === 0) {
      this._hasBonusPoints = 2;
    }
    if (this._currentRoll === 2 && this._pinsLeft === 0) {
      this._hasBonusPoints = 1;
    }
  },

  _addScore: function(score) {
    this._score += score;
    if (this._hasBonusPoints > 0) {
      this._score += score;
      this._hasBonusPoints--;
    }
  },

  _addToFrame: function(score) {
    this.getCurrentFrame()[this._currentRoll] = score;
    this.getCurrentFrame()["totalScore"] = this.getScore();
  },

  _moveForward: function() {
    this._currentRoll++;
    if ((this._currentFrame < 10 && this._currentRoll > 2) || this._pinsLeft === 0) {
      this._currentFrame++;
      this._currentRoll = 1;
      this._pinsLeft = 10;
      return;
    }
    if (this._pinsLeft === 0 && this._currentRoll < 4) {
      this._pinsLeft = 10;
      return;
    }
    if (this._pinsLeft !== 0 && this._currentRoll > 2) {
      this._currentFrame++;
    }
  },

};

