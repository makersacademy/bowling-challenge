var Bowling = function () {
  this._score = 0
  this._frames = []
  for (var i=0; i<10; i++){
    this._frames.push(new Frame)
  }
}

Bowling.prototype.score = function(){
  return this._score
}

Bowling.prototype.framesToPlay = function(){
  return this._frames.filter(function(frame){
    return frame._finished === false
  })
}

Bowling.prototype.frameIndex = function(frame){
  return this._frames.indexOf(frame)
}


Bowling.prototype.updateRollScoreSheet = function(frameIndex, rollIndex, pinsDown){
  var element = 'frame-' + (frameIndex + 1) + '-roll-' + (rollIndex + 1)
  document.getElementById(element).innerHTML = pinsDown
}

Bowling.prototype.updateFrameScoreSheet = function () {
  this._frames.forEach(function(frame, index, array){
    var frameIndex = index
    var element = 'frame-' + ( parseInt(frameIndex) + 1)
    document.getElementById(element).innerHTML = frame._score
  })
}

Bowling.prototype.updateTotalScore = function () {
  var totalScore = 0
  this._frames.forEach(function(frame){
    totalScore += frame._score
  })
  document.getElementById('total-score').innerHTML = totalScore
  this._score = totalScore
};

Bowling.prototype.hideButtons = function (rollIndex, pinsDown) {
  if (rollIndex == 0 && pinsDown != 10 ){
    var upto = 10 - pinsDown
    for( i = upto+1; i<=10; i++    ){
      document.getElementById('num-' + i).style.display = "none";
    }
  }
};

Bowling.prototype.showButtons = function () {
  for(var i=0; i<=10; i++ ){
    document.getElementById('num-' + i).style.display = "block";
  }
};


Bowling.prototype.roll = function (pinsDown) {

  this.showButtons()

  var frameToPlay = this.framesToPlay()[0]

  if (typeof frameToPlay === 'undefined') {
    alert("Game should be over, no more frames!")
  }

  var frameIndex = this.frameIndex(frameToPlay)

  if ( frameIndex <= 8 ) {

    var roll = frameToPlay.returnRolls()[0]

    var rollIndex = frameToPlay.rollIndex(roll)

    roll.knockPinsDown(pinsDown)

    frameToPlay._score += parseInt(roll._pinsDown)

    this.hideButtons(rollIndex, pinsDown)

    if ( frameToPlay.isStrike() ){
      // console.log('a strike frame')
      frameToPlay._isStrike = true
      var nextRoll = frameToPlay.returnRolls()[rollIndex + 1]
      nextRoll._finished = true
    }

    if (frameIndex <= 9 ) {

      // update strike bonus
      // does not update until next frame is complete
      this._frames.forEach(function(frame, index, array){
        if ( frame.isStrike() && frame._updated == false) {
          var nextFrame = array[index + 1]
          var twoFramesAfter = array[index + 2]
          if (nextFrame._finished == true ) {
            if ( nextFrame.isStrike() ) {
              frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
              frame._score += parseInt(twoFramesAfter._rolls[0]._pinsDown)
            } else {
              frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
              frame._score += parseInt(nextFrame._rolls[1]._pinsDown)
            }
            // console.log('just updated a strike frame')
            frame._updated = true
          }
        }
      }) // close forEach

      // update spare bonus
      // does not update until next frame is complete
      this._frames.forEach(function(frame, index, array){
        if ( frame.isSpare() && frame._updated == false) {
          var nextFrame = array[index + 1]
          if (nextFrame._finished == true ) {
            frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
            // console.log('just updated a spare frame')
            frame._updated = true
          }
        }
      }) // close forEach

    } else if ( frameIndex == 9 ) { // close if (frameIndex <= 9 )
      // update strike bonus
      // does not update until next frame is complete
      if ( frame.isStrike() && frame._updated == false) {
        var nextFrame = this._frames[frameIndex + 1]
        if (nextFrame._finished == true ) {
          // console.log('just updated a strike frame this is frame 9')
          frame._updated = true
        }
      }
    }

    roll._finished = true

    this.updateRollScoreSheet(frameIndex, rollIndex, pinsDown)

    function allRollsOver(roll, index, array){
      return roll._finished === true
    }

    if (  frameToPlay._rolls.every(allRollsOver)  ){
      this.updateFrameScoreSheet(frameIndex, frameToPlay)
      frameToPlay._finished = true
    }

    this.updateTotalScore()
    // console.log('total score is ' + this._score)


  } else if (frameIndex == 9) { //tenth frame

    // console.log('this is frame number ' + parseInt(frameIndex + 1))

    var frameToPlay = this.framesToPlay()[0]
    var frameIndex = this.frameIndex(frameToPlay)
    var roll = frameToPlay.returnRolls()[0]
    var rollIndex = frameToPlay.rollIndex(roll)

    roll.knockPinsDown(pinsDown)

    frameToPlay._score += parseInt(roll._pinsDown)

    this.updateRollScoreSheet(frameIndex, rollIndex, pinsDown)

    if ( frameToPlay.isStrike() ){

      // console.log('a strike 10th frame')

      if ( frameToPlay._rolls.length == 2 && frameToPlay.isStrike()){
        frameToPlay._rolls.push(new Roll)
      } else {

      }

      frameToPlay._isStrike = true
      var nextRoll = frameToPlay.returnRolls()[rollIndex + 1]
      // console.log("this is frame 10 roll index of " + rollIndex )
      // nextRoll._finished = true

    }


    roll._finished = true
    function allRollsOver(roll, index, array){
      return roll._finished === true
    }

    if (  frameToPlay._rolls.every(allRollsOver)  ){
      // console.log(frameToPlay._rolls)
      // console.log('frame 10 all rolls over')
      this.updateFrameScoreSheet(frameIndex, frameToPlay)
      frameToPlay._finished = true
    }

    // adding bonuses
    this._frames.forEach(function(frame, index, array){


      if ( frame.isSpare() && frame._updated == false) {
        if (index < 9) {
        var nextFrame = array[index + 1]
        // console.log(index + ' ok')
        if (nextFrame._finished == true ) {
          frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
          // console.log('just updated a spare frame')
          frame._updated = true
        }
        }
      }

      if ( frame.isStrike() && frame._updated == false) {

        if ( index == 7 ) { // 8th frame
          var nextFrame = array[index + 1]
          var twoFramesAfter = array[index + 2]
          if (nextFrame._finished == true ) {
            if ( nextFrame.isStrike() ) {

              frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
              frame._score += parseInt(twoFramesAfter._rolls[0]._pinsDown)
            } else {
              frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
              frame._score += parseInt(nextFrame._rolls[1]._pinsDown)
            }
            // console.log('just updated a strike frame')
            frame._updated = true
          }
        } else if (index == 8) {  // 9th frame
          var nextFrame = array[index + 1]
          if (nextFrame._finished == true) {
            frame._score += parseInt(nextFrame._rolls[0]._pinsDown)
            frame._score += parseInt(nextFrame._rolls[1]._pinsDown)
            // frame._score += parseInt(nextFrame._rolls[1]._pinsDown)
            frame._updated = true
          }
        }
      }

    }) // close forEach



    if (  frameToPlay._rolls.every(allRollsOver)  ){
      this.updateFrameScoreSheet(frameIndex, frameToPlay)
      frameToPlay._finished = true
    }

    this.updateTotalScore()

  } // close 10th frame

};
