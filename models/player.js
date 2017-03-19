'use strict';

function Player(name) {
  this.name = name;
}

Player.prototype.bowlBall = function () {
  return Math.round(Math.random() * (10));
};
