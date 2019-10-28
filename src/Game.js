function Game() {
  this._score = 0;
  this._frames = [];
  this._bowls = [];
  this._bowlNumber = 0;
  this._frameBowls = [];
  this._frameScore = 0;
  this._frameBonus = [];
  this._frameType = 'normal'
  this._frameMove = 0;
  this._frameNumber = 1;
  this._frameComplete = false;
  this._gameOver = false;
};

Game.prototype.add = function(pins) {
  this._bowls.push(pins)
  this._bowlNumber += 1
  this._frameMove +++1
  if (this._frameNumber < 10) {
    this._frameBowls.push(pins)
    this.addBonus(pins)
    if (this.isStrike() || this._frameMove === 2) {
        this.nextTurn()
        this._frameMove = 0
        this._frameNumber +++1
        this._frameBowls = []
        this._frameBonus = []
        this._frameComplete = false
    }
  } else {
      this.addBonus(pins)
      this.frameTen(pins)    
  }
}

Game.prototype.frameTen = function(pins) {
  if (this._frameMove == 1 ){
    this._frameBowls.push(pins)
  }
  if (this._frameMove == 2) {
    this._frameBowls.push(pins)
    this.isStrike() 
    if (this.frameScore() < 10) {
      this._frameComplete = true
      this.nextTurn()
      this._frameNumber +++1
      this._gameOver = true
      
    }
  }
  if (this._frameMove == 3) {
    this._frameBowls.push(pins) 
    this._frameComplete = true
    this.frameScore()
    this.nextTurn()
    this._frameNumber +++1
    this._gameOver = true
  }
}

Game.prototype.isStrike = function() {
  if (this.frameScore() == 10 && this._frameBowls[0] != 10 ){
      this._frameType = 'spare'
      return false
    }
    else if (this._frameBowls[0] === 10){
      this._frameType = 'strike'
        return true
      }
      else {
        this._frameType = 'normal'
        this._frameComplete = true;
      return false
    }
}

Game.prototype.frameScore = function() {
  var frameScore = 0
    var j = this._frameBowls.length
  for (var i = 0; i < j; i++) {
    frameScore += this._frameBowls[i]
    this._frameScore = frameScore
  }
  return frameScore
}

Game.prototype.updateFrameScore = function(frame){
  var score = 10
  var j = frame.frameBonus.length
  for (var i = 0; i < j; i++) {
    score += frame.frameBonus[i]
  }
  frame.frameScore = score
}

Game.prototype.score = function() {
  var score = 0
  var j = this._frameNumber - 1
  for (var i = 0; i < j; i++) {
    frame = this._frames[i]
    if (frame.frameComplete === true) {
    score += frame.frameScore
    }
  }
  return this._score = score
}

Game.prototype.addBonus = function(pins){
  var lastFrame
  var secondLastFrame
  if (this._frameNumber > 1){
    lastFrame = this._frames[this._frameNumber - 2]
    if (lastFrame.frameType === 'spare' && lastFrame.frameBonus.length === 0) {
        lastFrame.frameBonus.push(pins)
        this.updateFrameScore(lastFrame)
        lastFrame.frameComplete = true;
      }
    if (lastFrame.frameType === 'strike' && lastFrame.frameBonus.length < 2 ) {
      lastFrame.frameBonus.push(pins)
      this.updateFrameScore(lastFrame)
      if (lastFrame.frameBonus.length === 2) {
        lastFrame.frameComplete = true;
      }
    }
    if (this._frameNumber > 2) {
      secondLastFrame = this._frames[this._frameNumber - 3]
      if (secondLastFrame.frameType === 'strike' && secondLastFrame.frameBonus.length === 1) {
        secondLastFrame.frameBonus.push(pins)
        this.updateFrameScore(secondLastFrame)
        secondLastFrame.frameComplete = true;
      }
    }
  }
}

Game.prototype.nextTurn = function(){
  var frame = {}
  frame['frameNumber'] = this._frameNumber
  frame['frameBowls'] = this._frameBowls
  frame['frameBonus'] = this._frameBonus
  frame['frameType'] = this._frameType
  frame['frameBowl'] = this._bowlNumber
  frame['frameScore'] = this._frameScore
  frame['frameComplete'] = this._frameComplete
  this._frames.push(frame)
}