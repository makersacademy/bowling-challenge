function Frame(){
  // this._frameScore = 0
  this._rollNumber = 0
  this._maxRolls   = 2
  this._isFinished = false
  this._scoreboard = []
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
  this._scoreboard.push(pins)
  this._rollNumber ++
}

Frame.prototype.closeFrame = function () {
  if(this._rollNumber === this._maxRolls) {
    this._isFinished = true
    // var score = this._scoreboard.reduce(function (first, last){
    //   return first + last
    // })
    // this._frameScore = score
  }
};

Frame.prototype.isStrike = function (pins) {
  var lastScore = this._scoreboard[this._scoreboard.length - 1]
  if(pins === 10){
    this._isStrike   = true
    this._scoreboard.push(pins)
    this._scoreboard.push(0)
  } else if (lastScore + pins === 10){
    this.isSpare()
  } else {
    this.roll(pins)
  }
  this.closeFrame()
};


Frame.prototype.isSpare = function (pins) {
    this._isSpare = true
};
