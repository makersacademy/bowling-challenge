'use strict';

function Scorecard() {
  this.currentGame = [];
  this.currentFrame = [];
  this.rollOne = 0;
  this.rollTwo = 0;
  this.frameScore = 0;
}

Scorecard.prototype.currentGameScore = function() {
  return this.currentGame;
};

Scorecard.prototype.calculateCurrentRole = function(pins) {
    if (this.rollOne 0) {
    this.roleOne = pins
  } else {
    this.rollTwo = pins
  }
};
