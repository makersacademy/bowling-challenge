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
