'use strict';

function Bowling() {
  this.score = 0
  this.STARTING_PINS = 10
}

Bowling.prototype.firstBowl =  function() {
  this.score += 5
}

Bowling.prototype.randomScore = function() {
  return Math.floor((Math.random()) * 11);
}