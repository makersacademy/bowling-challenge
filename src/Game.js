'use strict';

function Game(){
  self._frames = new Array();
  self._score = 0;
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
  var oneRoll = this._rollOneFrame();
  self._frames.push(oneRoll);
  self._score = oneRoll[0] + oneRoll[1];
};

Game.prototype._rollOneFrame = function () {
  var rollOne = this._roll();
  var rollTwo = Math.min(this._roll(), 10 - rollOne);
  return [rollOne, rollTwo];
}

Game.prototype._roll = function () {
  return Math.floor(Math.random() * 10);
};
