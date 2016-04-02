function Frame() {
  this._rolls = []
}

Frame.prototype.roll = function (pins) {
  this._rolls.push(pins)
};

Frame.prototype.complete = function () {
  // if full, is spare or strike?
};

Frame.prototype.isFull = function () {
  if(this._rolls.length === 2){
    return this._rolls.reduce(function (first, second) {
      return first + second;
    })
  }
}

Frame.prototype.isSpare = function () {
  if(this.isFull === 10){
    console.log('SPARE!')
  }
};
