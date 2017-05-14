var Frame = function () {
  this._score = 0
  this._finished = false
  this._rolls = []
  for (var i=0; i<2; i++){
    this._rolls.push(new Roll)
  }
}

Frame.prototype.isSpare = function () {

  if ( (this._rolls[0]._pinsDown + this._rolls[1]._pinsDown) == 10 ){
    return true
  } else {
    return false
  }

};

Frame.prototype.isStrike = function () {

  // if ( (this._rolls[0]._pinsDown == 10 ){
  //   return true
  // } else {
  //   return false
  // }

};
