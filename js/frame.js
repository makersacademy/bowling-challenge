var Frame = function () {
  this._score = 0
  this._finished = false
  this._rolls = [new Roll, new Roll]
}

Frame.prototype.isSpare = function () {

  if ( (this._rolls[0]._pinsDown + this._rolls[1]._pinsDown) == 10 ){
    return true
  } else {
    return false
  }

};

Frame.prototype.isStrike = function () {

  if ( this._rolls[0]._pinsDown == 10 ){
    return true
  } else {
    return false
  }

};

Frame.prototype.hit = function (roll, pinsDown) {
  this._rolls[roll]._pinsDown = pinsDown
  this._score += pinsDown
};

Frame.prototype.scoreIs = function () {
  return this._score
};
