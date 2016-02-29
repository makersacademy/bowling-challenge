'use strict';

function Game(frameKlass, lastFrameKlass) {
  this._frameKlass = typeof frameKlass === 'undefined' ? Frame : frameKlass;
  this._lastFrameKlass = typeof lastFrameKlass === 'undefined' ? LastFrame : lastFrameKlass;
  this._frames = [];
}

Game.prototype.roll = function (pins) {
  if (typeof pins !== 'number' || pins < 0) {
    throw new Error('Invalid roll');
  } else if (this._isOver()) {
    throw new Error('Game over');
  }
  this._currentFrame().roll(pins);
};

Game.prototype.calculateScore = function () {
  var score = 0;
  var frames = this._frames;

  for (var i = 0; i < frames.length; i++) {
    score += frames[i].getScore();

    if (frames[i+1] !== undefined) {
      score += this._calculateBonus(i);
    }
  }
  return score;
};

Game.prototype._calculateBonus = function (i) {
  var bonus;
  var frames = this._frames;

  if (frames[i].isAStrike()) {
    bonus = this._strikeBonus(i);
  } else if (frames[i].isASpare()) {
    bonus = frames[i+1].getRoll(1);
  }
  return bonus || 0;
};

Game.prototype._strikeBonus = function (i) {
  var frames = this._frames;
  var bonus = 0;

  if (frames[i+1] instanceof LastFrame) {
    bonus = frames[i+1].getRoll(1) + frames[i+1].getRoll(2);
  } else if (frames[i+1].isAStrike() && frames[i+2] !== undefined) {
    bonus = frames[i+2].isAStrike() ? 20 : 10 + frames[i+2].getRoll(1);
  } else {
    bonus = frames[i+1].getScore();
  }
  return bonus;
};

Game.prototype._isOver = function () {
  return this._frames.length >= 10 && this._currentFrame().isComplete();
};

Game.prototype._currentFrame = function () {
  var currentFrame = this._frames[this._frames.length - 1];

  if (currentFrame instanceof LastFrame) {
    return currentFrame;
  } else if (typeof currentFrame === 'undefined' || currentFrame.isComplete()) {
    return this._newFrame();
  } else {
    return currentFrame;
  }
};

Game.prototype._newFrame = function () {
  var frame;

  if (this._frames.length === 9) {
    frame = new this._lastFrameKlass();
  } else {
    frame = new this._frameKlass();
  }
  this._frames.push(frame);
  return frame;
};
