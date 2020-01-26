function Game() {
  this.frames = [];
  this.rollType = "";
}

Game.prototype.viewScore = function() {
  var score = 0
  this.frames.forEach(function (frame) {
    score += frame.total
  })
  return score
}

Game.prototype.viewFrames = function() {
  return this.frames;
}

Game.prototype.newFrame = function(roll1) {
  if (this.frames.length === 10) {
    throw new Error("Game Over");
  } 

  frame = {
    roll1: roll1,
    roll2: 0,
    total: roll1,
    type: this._rollType(roll1),
  }

  this.frames.push(frame)
  this._addBonus(roll1)
}

Game.prototype.updateFrame = function(roll2) {
  var currentFrame = this._currentFrame()

  if (this.frames.length === 10 && this._isStrike(currentFrame.roll1)) {
    return this._updateTenthFrame(roll2)
  }

  if (currentFrame.roll1 === 10) {
    throw new Error("Nice try")
  }
  
  currentFrame.roll2 = roll2
  currentFrame.total += roll2

  if (currentFrame.total === 10) {
    currentFrame.type = 'spare'
  }
}

Game.prototype._updateTenthFrame = function(roll) {
  var currentFrame = this._currentFrame()
  currentFrame.roll2 = roll
  currentFrame.total += roll
}

Game.prototype._addBonus = function(roll) {
  var previousFrame = this._previousFrame().type
  var twoFramesPrior = this._twoFramesPrior().type
  if (previousFrame === 'spare' || previousFrame === 'strike') {
    this._previousFrame().total += roll
  }

  if (twoFramesPrior === 'strike') {
    this._twoFramesPrior().total += roll
  }
}


Game.prototype._isStrike = function(roll) {
  return roll === 10
}

Game.prototype._rollType = function(roll) {
  if (this._isStrike(roll)) {
    return "strike"
  } else {
    return ""
  }
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frames.length - 1]
}

Game.prototype._previousFrame = function() {
  var frame = this.frames[this.frames.length - 2]
  if (frame === undefined) {
    return ""
  } else {
    return frame
  }
}

Game.prototype._twoFramesPrior = function() {
  var frame = this.frames[this.frames.length - 3]
  if (frame === undefined) {
    return ""
  } else {
    return frame
  }
}