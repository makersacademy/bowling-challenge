function Frame(firstRoll,secondRoll){
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll
}

Frame.prototype.getFirstRoll = function () {
  return this._firstRoll;
};


Frame.prototype.getSecondRoll = function () {
  return this._secondRoll
};
