function Frame(){
  this._score = 0
  this._rollNumber = 0
  this._maxRolls   = 2
  this._isFinished = false
  this._scoreboard = []
  this._isStrike   = false
  this._isSpare    = false
}

Frame.prototype.play = function (pins) {
  this.isStrike(pins)
  this.closeFrame()
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
    this.totalScore()
  }
};

Frame.prototype.isStrike = function (pins) {
  var lastScore = this._scoreboard[this._scoreboard.length - 1]
  if(pins === 10){
    this._isStrike   = true
    this._scoreboard.push(pins, 0)
    this._rollNumber += 2
  } else if (lastScore + pins === 10){
    this.isSpare()
    this._rollNumber ++
    this.closeFrame()
  } else {
    this.roll(pins)
  }
};

Frame.prototype.isSpare = function (pins) {
    this._isSpare = true
};

Frame.prototype.totalScore = function () {
  var score = this._scoreboard.reduce(function (first, last){
    return first + last
  })
  this._score = score
};
