'use strict';

function Player(name) {
  this.name = name;
}

Player.prototype.throwBall = function () {
  return Math.round(Math.random() * (10));
};
