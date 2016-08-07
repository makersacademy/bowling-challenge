'use strict';

function Bowling () {
  this._scoreboard = new Scoreboard();
  this._currentRoll = new Bowl();
}

Bowling.prototype.getScoreboard = function () {
  return this._scoreboard;
};

Bowling.prototype.getCurrentRoll = function () {
  return this._currentRoll;
};

Bowling.prototype.playFirstRoll = function () {
  this._scoreboard.nextFrame();
  this._currentRoll.roll();
  this._scoreboard.saveFirstRoll(this._currentRoll.getPins());
};

Bowling.prototype.playSecondRoll = function () {
  this._currentRoll.roll();
  this._scoreboard.saveSecondRoll(this._currentRoll.getPins());
};
