'use strict';

function Game() {
  this.score = 0;
};

Game.prototype.bowl = function (pins) {
  this.score += pins
};
