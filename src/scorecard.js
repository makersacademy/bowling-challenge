var Scorecard = function(){
  this._score = 0;
  this._frame = 1;
  this._rollNumber = 1;
  this._pinsDown = 0;
};

Scorecard.prototype.displayScore = function(){
  return this._score;
};

Scorecard.prototype.roll = function (pins) {
  this._score += pins;
  this._pinsDown += pins;
  this._nextRoll(this._pinsDown);
};

Scorecard.prototype._nextRoll = function(pinsDown) {
  if(pinsDown === 10){
    if(this._rollNumber === 1){
      //strike
    } else {
      //spare
      this._rollNumber = 1;
    }
  } else {
    this._rollNumber = (this._rollNumber % 2) + 1;
  }
};
