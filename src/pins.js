function Pins(game) {
  this.game = game
  this.score  = game.score
}


Pins.prototype.firstRoll = function() {
  var max = Math.floor(totalNumberOfPins + 1);
  return Math.floor(Math.random()*max)
}

Pins.prototype.secondRoll = function(pinsFromFirstRoll) {
  var pinsFromFirstRoll = Math.floor(totalNumberOfPins-pinsFromFirstRoll);
  return Math.floor(Math.random()*pinsFromFirstRoll)
}

const totalNumberOfPins = 10;
