var Bowling = function () {
  this._frames = []
  for (var i=0; i<10; i++){
    this._frames.push(new Frame)
  }
}


var Frame = function () {
  this._rolls = []
  for (var i=0; i<2; i++){
    this._rolls.push(new Roll)
  }
}


var Roll = function () {
  this._pinsDown = 0
}

var game = new Bowling();
