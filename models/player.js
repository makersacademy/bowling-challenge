'use strict';

function Player(name) {
  this.name = name;
}

Player.prototype.bowlBall = function () {
  return Math.floor(Math.random()*(10));
};
