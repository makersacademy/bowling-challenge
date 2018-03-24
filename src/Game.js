'use strict';

function Game() {
  this.total = 0;
};

Game.prototype.roll = function() {
  return true;
}

Game.prototype.score = function() {
  var score = 0;
  return score + 4;
}
