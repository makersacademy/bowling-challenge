'use strict';

function Game() {
 this.pins = [0,1,2,3,4,5,6,7,8,9,10]
 this.score = [];
 this.frameCount = 0;
 this.rack = false;
}

Game.prototype.start_game = function() {
  var pinsReady = this.pins;
  this.rack = true;
  return this.rack;
};

Game.prototype.roll = function() {
  first_score = this.pins[Math.floor(Math.random() * this.pins.length)];
  return first_score;
};
