'use strict';

function Game() {
 this.pins = [0,1,2,3,4,5,6,7,8,9,10]
 this.score = [];
 this.frameCount = 0;
 this.rack = false;
}

Game.prototype.start = function() {
  var pinsReady = this.pins;
  this.rack = true;
  return this.rack;
};
