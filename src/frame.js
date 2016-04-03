function Frame(){
  this._score      = 0
  this._rollNumber = 0
  this._maxRolls   = 2
  this._isFinished = false
  this._scoreArray = []
  this._isStrike   = false
  this._isSpare    = false
}

Frame.prototype.play = function (pins) {
  this.isStrike(pins)
};

Frame.prototype.roll = function(pins) {
  if(this._rollNumber >= this._maxRolls){
    throw new Error('Two rolls per frame!')
  }
  this._score += pins
  this._scoreArray.push(pins)
  this._rollNumber ++
}

Frame.prototype.closeFrame = function () {
  if(this._rollNumber === this._maxRolls) {
    this._isFinished = true
  }
};

Frame.prototype.isStrike = function (pins) {
  if(pins === 10){
    this._isStrike   = true
    this._isFinished = true
    if(this._scoreArray[this._scoreArray.length - 1] === 0){
      this._scoreArray.push(0)
    }
  } else if (this._scoreArray[this._scoreArray.length - 1] + pins === 10){
    this.isSpare()
  } else {
    this.roll(pins)
  }
};

Frame.prototype.isSpare = function (pins) {
    this._isSpare = true
};
