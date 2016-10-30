function Turn(pins) {
  this._rollsComplete = 1;
  this._rollOnePinsDown = pins;
  this._rollTwoPinsDown;
  this._totalPinsDown = 0;
  this.status = "in progress";
  this.MAX_PINS = 10;
};

Turn.prototype.play = function () {

};
