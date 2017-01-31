'use strict';

function BowlingGame () {
  this._scoreboard = new Scoreboard();
  this._currentRoll = new Roll();
}

BowlingGame.prototype.getScoreboard = function () {
  return this._scoreboard;
};

BowlingGame.prototype.getCurrentRoll = function () {
  return this._currentRoll;
};

BowlingGame.prototype.playFirstRoll = function () {
  this._currentRoll.roll();
  this._scoreboard.saveFirstRoll(this._currentRoll.getHitsFromRoll());
};

BowlingGame.prototype.playSecondRoll = function () {
  this._currentRoll.roll();
  this._scoreboard.saveSecondRoll(this._currentRoll.getHitsFromRoll());
};
