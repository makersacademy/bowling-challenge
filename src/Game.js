'use strict';

function Game() {

  this.score = 0;

}

Game.prototype.returnScore = function() {
  return this.score;
}
