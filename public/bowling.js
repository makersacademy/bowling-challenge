function Game() {
  this.throws = {};
  this.currentBowl = "#f1-b1";
  this.rounds = ["#f1-b2", "#f2-b1", "#f2-b2", "#f3-b1", "#f3-b2",
   "#f4-b1", "#f4-b2", "#f5-b1", "#f5-b2", "#f6-b1", "#f6-b2",
   "#f7-b1", "#f7-b2", "#f8-b1", "#f8-b2", "#f9-b1", "#f9-b2",
   "#f10-b1", "#f10-b2", "#f10-b3"];
};

Game.prototype.addThrow = function(pins) {
  if (isNaN(pins) || pins === '') throw('#addThrow() needs numerical input');
  this.throws[this.currentBowl] = pins;
};

Game.prototype.nextBowl = function() {
  this.currentBowl = this.rounds.shift();
};

module.exports = Game;
