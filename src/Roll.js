function Roll() {
  var _pins;
  var _rollScore;
  var _rollBonus;

  this._rollScore = 0;
  this._rollBonus = 0;
  this._pins = 0;
}


Roll.prototype.pinsKnockedDown = function(pins) {
  this._pins = pins;
  return pins;
};

Roll.prototype.rollScore = function() {
  return this._pins;
};

Roll.prototype.rollBonus = function() {
  if (this._pins === 10) {
    this._rollBonus = 10;
  } else {
    this._rollBonus = 0;
  }
  return this._rollBonus;
};

