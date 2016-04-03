function bowlingGame() {
  this._score = 0;
  this._pins = [];
  this._frame = 1;
  this._roll = 0;
}

bowlingGame.prototype.score = function() {
  return this._score;
}

bowlingGame.prototype.pins = function() {
  return this._pins;
}

bowlingGame.prototype.frame = function() {
  return this._frame;
}

bowlingGame.prototype.roll = function() {
  return this._roll;
}

bowlingGame.prototype.knockedDownPins = function(number) {
  this._pins.push(number);
  this._roll += 1;
}

bowlingGame.prototype.addToScore = function() {
   var total = this._pins[0] + this._pins[1];
   this._score += total;
   this._frame += 1;
   this._roll = 0
}
