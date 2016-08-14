'use strict';

function Bowling () {
  this.scoreboard = new Scoreboard();
  this.currentRoll = new Bowl();
}

Bowling.prototype.getScoreboard = function() {
  return this.scoreboard;
};

Bowling.prototype.getCurrentRoll = function() {
  return this.currentRoll;
};

Bowling.prototype.playFirstRoll = function() {
  this.scoreboard.nextFrame();
  this.currentRoll.roll();
  this.scoreboard.saveFirstRoll(this.currentRoll.getPins());
};

Bowling.prototype.playSecondRoll = function() {
  this.currentRoll.roll();
  this.scoreboard.saveSecondRoll(this.currentRoll.getPins());
};
