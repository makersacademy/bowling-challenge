'use strict';

function BowlingGame () {
  this.scoreboard = new Scoreboard();
  this.currentRoll = new Roll();
}

BowlingGame.prototype.getScoreboard = function () {
  return this.scoreboard;
};

BowlingGame.prototype.getCurrentRoll = function () {
  return this.currentRoll;
};

BowlingGame.prototype.playFirstRoll = function () {
  this.currentRoll.roll();
  this.scoreboard.saveFirstRoll(this.currentRoll.getHitsFromRoll());
};

BowlingGame.prototype.playSecondRoll = function () {
  this.currentRoll.roll();
  this.scoreboard.saveSecondRoll(this.currentRoll.getHitsFromRoll());
};
