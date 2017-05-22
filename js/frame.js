var Frame = function () {
  this._score = 0
  this._finished = false
  this._rolls = [new Roll, new Roll]
  this._updated = false
}


Frame.prototype.returnRolls = function () {
  return this._rolls.filter(function(roll){
    return roll._finished === false
  })
};


Frame.prototype.rollIndex = function(roll){
  return this._rolls.indexOf(roll)
}


Frame.prototype.isSpare = function () {

  var firstRoll = parseInt(this._rolls[0]._pinsDown)
  var secondRoll = parseInt(this._rolls[1]._pinsDown)
  var total = firstRoll + secondRoll

  if ( total == 10 && firstRoll != 10){
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
