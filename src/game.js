'use strict';

function Game() {
  this.score = 0
};

Game.prototype.point_increase = function() {
  this.score += 1;
};

Game.prototype.updateRolls = function (rollsList) {
  if(rollsList.length > 21){
    throw new Error('cannot have more than 21 rolls in a game')
  }
  game._rolls = rollsList;
};
