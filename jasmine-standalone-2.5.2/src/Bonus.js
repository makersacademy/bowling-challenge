'use strict';

function Bonus(type) {
  this.type = type;
  this.scoreCard = [];
  this.numberOfRolls = this.setNumberOfRolls();
}

Bonus.prototype.addToBonus = function (pins) {
  this.scoreCard.push(pins);
}

Bonus.prototype.getScore = function() {
  return this.scoreCard.reduce((a, b) => a + b, 0);
}

Bonus.prototype.isOver = function() {
  return this.scoreCard.length >= this.numberOfRolls;
}

Bonus.prototype.setNumberOfRolls = function() {
  if (this.type === "strike") {
    return 2;
  } else {
    return 1;
  }
}
