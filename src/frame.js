function Frame() {
  this._rolls = []
}

Frame.prototype.roll = function (pins) {
  this.finished();
  this._rolls.push(pins);
}

Frame.prototype.finished = function () {
  if(this.isStrike()){
    this.score()
    this._rolls = []
  }
  // if full, is spare or strike?
  //clear out frame -> start new frame
}

Frame.prototype.score = function () {
  return this._rolls.reduce(function (first, second) {
    return first + second;
  })
}

Frame.prototype.isFull = function () {
  return this._rolls.length === 2

}

Frame.prototype.isSpare = function() {
  return this.score() === 10
};

Frame.prototype.isStrike = function() {
  return (this._rolls[0] || this._rolls[1]) === 10
}
//skip second roll if first is 10.
