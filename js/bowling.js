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


Bowling.prototype.updateRollScoreSheet = function(frameIndex, rollIndex, pinsDown){
  var element = 'frame-' + (frameIndex + 1) + '-roll-' + (rollIndex + 1)
  document.getElementById(element).innerHTML = pinsDown
}

Bowling.prototype.updateFrameScoreSheet = function (frameIndex, frameToPlay) {
  var element = 'frame-' + ( parseInt(frameIndex) + 1)
  var score = frameToPlay._score
  document.getElementById(element).innerHTML = score

}

Bowling.prototype.updateTotalScore = function () {
  var totalScore = 0
  this._frames.forEach(function(frame){
    totalScore += frame._score
    document.getElementById('total-score').innerHTML = totalScore
  })
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

  var frameIndex = this.frameIndex(frameToPlay)

  if ( frameIndex <= 8 ) {

    var roll = frameToPlay.returnRolls()[0]

    var rollIndex = frameToPlay.rollIndex(roll)

    roll.knockPinsDown(pinsDown)

    frameToPlay._score += parseInt(roll._pinsDown)

    this.hideButtons(rollIndex, pinsDown)

    if ( frameToPlay.isStrike() ){
        console.log('a strike frame')
      var nextRoll = frameToPlay.returnRolls()[rollIndex + 1]
      nextRoll._finished = true
    }

    if ( frameToPlay.isSpare() ){
      console.log('a spare frame')
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


  } else if (frameIndex == 9) { //tenth frame
      console.log('this is frame number ' + frameIndex)
  }

};
