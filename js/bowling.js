var Bowling = function () {
  this._frames = []
  for (var i=0; i<10; i++){
    this._frames.push(new Frame)
  }
}

Bowling.prototype.roll = function (pinsDown) {

  var frameToPlay = this._frames.filter(function(frame){
    return frame._finished === false
  })

  var frameToPlay = frameToPlay[0]

  var roll = frameToPlay._rolls.filter(function(roll){
    return roll._finished === false
  })

  var roll = roll[0]

  roll._pinsDown = pinsDown;
  roll._finished = true

  console.log(frameToPlay)


};
