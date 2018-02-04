'use strict';

function Game() {
  this.score = 0
};

Game.prototype.point_increase = function() {
  this.score += 1;
};
