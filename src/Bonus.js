/*jslint node: true */

function Bonus(type) {
  this.type = type;
  this.scoreCard = [];
  this.numberOfRolls = this._setNumberOfRolls();
}

Bonus.prototype = {
  addToBonus: function(pins) {
    if (!this.isOver()) {
      this.scoreCard.push(pins);
    }
  },

  getScore: function() {
    return this.scoreCard.reduce(function(a, b) {
      return a + b
    }, 0);
  },

  isOver: function() {
    return this.scoreCard.length >= this.numberOfRolls;
  },

  _setNumberOfRolls: function() {
    return this.type === "strike" ? 2 : 1
  }
}
