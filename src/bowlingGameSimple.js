'use strict';

function Game() {
  this.pinRolls = [];
};

Game.prototype.addPinRolls = function(rolls) {
  this.pinRolls = rolls;
};

