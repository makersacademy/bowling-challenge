'use strict';

var Game = function(playerName, frameClass, playerClass) {
  this._frameClass = frameClass || Frame;
  this._playerClass = playerClass || Player;

  this._frames = [];
  this._createEmptyFrames();
  this._currentFrameNumber  = 0;

  this._player = new this._playerClass(playerName);

  this._isFirstRoll = true;
  this._runningTotal = 0;
  this._strikeChain = [];
  this._hasExtraRolls = false;
  this._isFirstExtraRolls = false;
};

Game.prototype._createEmptyFrames = function () {
  for (var i = 1; i <= 10; i++) this._frames.push(new this._frameClass(i));
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getCurrentFrameNumber = function() {
  return this._currentFrameNumber;
};

Game.prototype.getCurrentFrame = function() {
  return this._frames[this._currentFrameNumber];
};

Game.prototype.getPreviousFrame = function() {
  if (this._currentFrameNumber !== 0) return this._frames[this._currentFrameNumber - 1];
};

Game.prototype.getPlayer = function() {
  return this._player;
};

Game.prototype.getScore = function() {
  return this._runningTotal;
};

Game.prototype.isFirstRoll = function () {
  return this._isFirstRoll;
};

Game.prototype.receiveRoll = function(pins) {
  var frame = this._frames[this._currentFrameNumber];
  this._updateHasExtraRolls(frame);
  this._updateFrame(frame,pins);
  this._calculateScore();
  this._updateFirstRoll(frame);
  this._updateCurrentFrameNumber();
};

Game.prototype._updateFrame = function(frame, pins) {
  if (this._hasExtraRolls) {
    this._isFirstExtraRoll ? frame.setFirstExtraRoll(pins) : frame.setSecondExtraRoll(pins);
    this._isFirstExtraRoll = !this._isFirstExtraRoll;
  } else {
    this._isFirstRoll ? frame.setFirstRoll(pins) : frame.setSecondRoll(pins);
  }
};

Game.prototype._updateFirstRoll = function(frame) {
  if (!frame.isAStrike()) this._isFirstRoll = !this._isFirstRoll;
};

Game.prototype._updateHasExtraRolls = function(frame) {
  if (this._currentFrameNumber === 9) {
    debugger;
    if (!frame.isOpen()) this.hasExtraRolls = true;
  }
};

Game.prototype._updateCurrentFrameNumber = function() {
  if (this._isFirstRoll) this._currentFrameNumber += 1;
  if (this._currentFrameNumber === 10) this._currentFrameNumber = 9;
};

Game.prototype._calculateScore = function() {
  var frame = this.getCurrentFrame();
  var previousFrame = this.getPreviousFrame();

  if (this._isFirstRoll) {
    this._updateIfPreviousSpare(frame, previousFrame);
    this._updateIfTwoOrThreeStrikes(frame, this._currentFrameNumber);
  } else {
    this._updateIfPreviousStrike(frame, previousFrame);
    this._updateIfCurrentOpen(frame);
  }
};

Game.prototype._updateIfPreviousSpare = function(frame, previousFrame) {
  if (this._currentFrameNumber !== 0 && previousFrame.isASpare()) {
    this._runningTotal = previousFrame.calculateScore(this._runningTotal,frame.getFirstRoll());
  }
};

Game.prototype._updateIfPreviousStrike = function(frame, previousFrame) {
  if (this._currentFrameNumber !== 0 && previousFrame.isAStrike()) {
    this._runningTotal = previousFrame.calculateScore(this._runningTotal,frame.getFirstRoll() + frame.getSecondRoll());
    this._strikeChain.shift();
  }
};

Game.prototype._updateIfCurrentOpen = function(frame) {
  if (frame.isOpen()) this._runningTotal = frame.calculateScore(this._runningTotal,0);
};

Game.prototype._updateIfTwoOrThreeStrikes = function(frame, currentFrameNumber) {
  if (frame.isAStrike()) {
    this._strikeChain.push(currentFrameNumber);
    if (this._strikeChain.length == 3) {
      this._runningTotal = this._frames[this._strikeChain[0]].calculateScore(this._runningTotal,20);
      this._strikeChain.shift();
    }
  } else {
    if (this._strikeChain.length == 2) {
      this._runningTotal = this._frames[this._strikeChain[0]].calculateScore(this._runningTotal,10 + frame.getFirstRoll());
      this._strikeChain.shift();
    }
  }
};
