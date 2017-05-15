var Bowling = function () {
  this._score = 0
  this._frames = []
  for (var i=0; i<10; i++){
    this._frames.push(new Frame)
  }
}

Bowling.prototype.framesToPlay = function(){
  return this._frames.filter(function(frame){
    return frame._finished === false
  })
}

Bowling.prototype.frameIndex = function(frame){
  return this._frames.indexOf(frame)
}


Bowling.prototype.updateScoreSheet = function(frameIndex, rollIndex, pinsDown){
  var element = 'frame-' + (frameIndex + 1) + '-roll-' + (rollIndex + 1)
  document.getElementById(element).innerHTML = pinsDown
}


Bowling.prototype.roll = function (pinsDown) {

  for(var i=0; i<=10; i++ ){
    document.getElementById('num-' + i).style.display = "block";
  }


  var frameToPlay = this.framesToPlay()[0]

  var frameIndex = this.frameIndex(frameToPlay)

  if ( frameIndex <= 8 ) {

    var roll = frameToPlay.returnRolls()[0]

    var rollIndex = frameToPlay.rollIndex(roll)

    roll.knockPinsDown(pinsDown)

    frameToPlay._score += roll._pinsDown

    if (rollIndex == 0 && pinsDown != 10 ){
      var upto = 10 - pinsDown
      for( i = upto+1; i<=10; i++    ){
        document.getElementById('num-' + i).style.display = "none";
      }
    }

    if ( frameToPlay.isStrike() ){
        console.log('a strike frame')
      var nextRoll = frameToPlay.returnRolls()[rollIndex + 1]
      nextRoll._finished = true
    }

    if ( frameToPlay.isSpare() ){
      console.log('a spare frame')
    }

    roll._finished = true

    this.updateScoreSheet(frameIndex, rollIndex, pinsDown)

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
