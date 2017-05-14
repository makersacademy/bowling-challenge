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

  var frameIndex = this._frames.indexOf(frameToPlay)

  if ( frameIndex <= 8 ) {

    var rolls = frameToPlay._rolls.filter(function(roll){
      return roll._finished === false
    })

    var roll = rolls[0]

    var rollIndex = frameToPlay._rolls.indexOf(roll)

    roll._pinsDown = pinsDown;
    frameToPlay._score += roll._pinsDown

    roll._finished = true

    var element = 'frame-' + (frameIndex + 1) + '-roll-' + (rollIndex + 1)

    document.getElementById(element).innerHTML = roll._pinsDown

    var rollIndex = frameToPlay._rolls.indexOf(roll)

    function allRollsOver(roll, index, array){
      return roll._finished === true
    }


    if (  frameToPlay._rolls.every(allRollsOver)  ){
      frameToPlay._finished = true
    }

  } else if (frameIndex == 9) { //tenth frame
      console.log('this is frame number ' + frameIndex)
  }

};
