'use strict';

function Game(){
  self._frames = new Array();
  self._score = 0;
  self._strike = [1];
  self._spare = [1];
};

Game.prototype.TOTAL_NUMBER_OF_FRAMES = 10;

Game.prototype.getFrames = function () {
  return self._frames;
};

Game.prototype.getScore = function () {
  return self._score
};

Game.prototype.getFrameNumber = function (number) {
  return self._frames[number-1];
};

Game.prototype.rollNextFrame = function () {
  if(self._frames.length >= 10) {
    return "You can roll only 10 frames in one game!"
  };
  var singleRoll = this._rollOneFrame();
  self._frames.push(singleRoll);
  var strikeMultiplicator = self._strike._beforeLast();
  var spareMultiplicator = self._spare._beforeLast();
  self._score += (singleRoll[0]*spareMultiplicator + singleRoll[1])*strikeMultiplicator;
};

Game.prototype._rollOneFrame = function () {
  var rollOne = this._roll();
  var rollTwo = Math.min(this._roll(), 10 - rollOne);
  self._strike.push((rollOne == 10) ? 2 : 1);
  self._spare.push((rollOne+rollTwo == 10)&&(rollOne != 10) ? 2 : 1);
  return [rollOne, rollTwo];
};

Game.prototype._roll = function () {
  return Math.floor(Math.random() * 10);
};

Array.prototype._last = function () {
  return this[this.length - 1];
};

Array.prototype._beforeLast = function () {
  return this[this.length - 2];
};

Game.prototype.whichGame = function () {
  if (self._score == 0) {
    return 'Gutter Game';
  } else if (self._score == 190) {
    return 'Perfect Game';
  }
    else {
      return 'Ordinary Game';
    }
};
