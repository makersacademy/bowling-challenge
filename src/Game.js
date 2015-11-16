function Game () {
  this.pins = 10;
}

Game.prototype.registerRoll = function(knockingDownPins) {
  this.pins -= knockingDownPins;
};

Game.prototype.remainingPins = function() {
  return this.pins;
};