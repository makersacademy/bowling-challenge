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

  var index = this._frames.indexOf(frameToPlay)

  if ( index <= 8 ) {

    //console.log(index)

    var rolls = frameToPlay._rolls.filter(function(roll){
      return roll._finished === false
    })

    var roll = rolls[0]

    roll._pinsDown = pinsDown;
    roll._finished = true
    
    var rollIndex = frameToPlay._rolls.indexOf(roll)

    //console.log(rollIndex)

    function allRollsOver(roll, index, array){
      return roll._finished === true
    }


    if (  frameToPlay._rolls.every(allRollsOver)  ){
      frameToPlay._finished = true
    } else {

    }

  } else if (index == 9) { //tenth frame

  }

};
