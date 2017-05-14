var Bowling = function () {
  this._score = 0
  this._frames = []
  for (var i=0; i<10; i++){
    this._frames.push(new Frame)
  }
}

Bowling.prototype.roll = function (pinsDown) {

  var framesToPlay = this._frames.filter(function(frame){
    return frame._finished === false
  })

  var frameToPlay = framesToPlay[0]

  var rolls = frameToPlay._rolls.filter(function(roll){
    return roll._finished === false
  })

  var roll = rolls[0]

  roll._pinsDown = pinsDown;
  roll._finished = true

  function allRollsOver(roll, index, array){
    return roll._finished === true
  }


  if (  frameToPlay._rolls.every(allRollsOver)  ){
    frameToPlay._finished = true
  } else {

  }

};
