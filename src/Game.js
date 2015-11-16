function Game () {
  this.pins = 10;
  this.rollCount = 0;
}

Game.prototype.registerRoll = function(knockingDownPins) {
  this.rollCount += 1;
  this.pins -= knockingDownPins;
};

Game.prototype.remainingPins = function() {
  return this.pins;
};

Game.prototype.isOver = function() {
  return (this.rollCount === 2 || this.pins === 0);
};