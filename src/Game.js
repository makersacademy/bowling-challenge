function Game(frame = new Frame) {
  this._scoreCardArray = []
  this._framesArray = [frame]
}

Game.prototype.newFrame = function(frame = new Frame) {
  this._framesArray.push(frame)
}

Game.prototype.allFrames = function() {
  return this._framesArray
}

Game.prototype.currentFrame = function() {
  return this._framesArray[this._framesArray.length - 1]
}

Game.prototype.scorecard = function() {
  return this._scoreCardArray
}

Game.prototype.score = function() {
  var sumOfRolls = 0
  this._framesArray.forEach(function(frame) {
    frame.frameStatus().forEach(function(roll) {
      sumOfRolls += roll
    });
  });
  return sumOfRolls
}

Game.prototype.strikeScorer = function(rollScore) {
  this.allFrames().forEach(function(frame) {
    if (frame.strikeStatus()) {
      frame.roll(rollScore)
      frame.strikeInitalizer()
    }
  })
}

Game.prototype.spareScorer = function(rollScore) {
  this.allFrames().forEach(function(frame) {
    if (frame.spareStatus()) {
      frame.roll(rollScore)
      frame.spareInitalizer()
    }
  })
}



Game.prototype.play = function(rollScore, frame = new Frame) {

  var currentFrame = this.currentFrame()
  currentFrame.roll(rollScore)
  this.strikeScorer(rollScore)
  this.spareScorer(rollScore)
  if (currentFrame.frameStatus().length === 2 || rollScore === 10) {
    if (rollScore === 10) {
      currentFrame.strikeInitalizer()
    } else if ((currentFrame.frameStatus()[0] + currentFrame.frameStatus()[1]) === 10) {
      currentFrame.spareInitalizer()
    }
    this._scoreCardArray.push(currentFrame.frameStatus())
    this.newFrame(frame)

  }
}
