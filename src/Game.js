'use strict';

var rolls = [];

function Game() {
  this.score = 0;
  var roll = 0;
}

Game.prototype.newGame = function() {
  return this.score;
};

Game.prototype.roll = function(pinsDown) {
  rolls.push(pinsDown);
  var sum = rolls.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  return this.score = sum;
};
