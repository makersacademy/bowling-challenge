function Frame(firstRoll,secondRoll){
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll
  this.endFrame = [firstRoll, secondRoll]
  this.tenFrames = []
}

Frame.prototype.getFirstRoll = function () {
  return this._firstRoll;
};


Frame.prototype.getSecondRoll = function () {
  return this._secondRoll
};

Frame.prototype.getEndFrame = function () {
  return this.endFrame;
};
