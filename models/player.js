'use strict';

function Player(name) {
  this.name = name;
}

Player.prototype.bowl = function () {
  return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
};
