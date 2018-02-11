const FRAME_LIMIT = 10;

function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
  this.bonusRoll = 0
}

FrameLog.prototype.addRoll = function(rollScore){
  if(this.isFramelogComplete()) throw "Frame set is complete - no more roll's allowed"
  if(this.frameCount() === 0 || this._currentFrame().isComplete()){
    let frame = this.frameClass.createFrame(this._isFinalFrame())
    frame.addRoll(rollScore)
    this.frames.push(frame)
  } else {
    this._currentFrame().addRoll(rollScore)
  }
  this._addBonusScores(rollScore)
  if (this.frameCount() === FRAME_LIMIT) this.bonusRoll++
}

FrameLog.prototype.isFramelogComplete = function(){
  return this.frameCount() === FRAME_LIMIT && this._currentFrame().isComplete()
}

FrameLog.prototype.calculateScore = function(){
  return this._frameScores().reduce((total,amount) => total + amount,0)
}

FrameLog.prototype._frameScores = function(){
  var scores = []
  this.frames.forEach(function(frame){
      scores.push(frame.score())
  })
  return scores
}

FrameLog.prototype._isFinalFrame = function(){
  return this.frameCount() === FRAME_LIMIT - 1
}
FrameLog.prototype._currentFrame = function(){
  return this.frames.slice(-1)[0]
}

FrameLog.prototype._addBonusScores = function(rollScore){
  if(this.frameCount() > 1){
    if(this._shouldAddSecondRoll()){
      this._previousFrame().addBonusRolls(this._currentFrame().rolls[1])
    } else if(this._shouldAddFirstRoll()) {
        this._previousFrame().addBonusRolls(this._currentFrame().rolls[0])
    }
    if (this._shouldAddConsecutiveStrikeRoll()){
        this.frames.slice(-3)[0].addBonusRolls(rollScore)
    }
  }
}

FrameLog.prototype._shouldAddSecondRoll = function(){
  return this._currentFrame().isComplete() && this._isPreviousFrameStrike() && !this._currentFrame().isStrike()
}

FrameLog.prototype._shouldAddFirstRoll = function(){
  return this._isPreviousFrameSpare() || this._isPreviousFrameStrike() && this.bonusRoll < 2
}

FrameLog.prototype._shouldAddConsecutiveStrikeRoll = function(){
  return this.frameCount() >= 3 && this._isPreviousFrameStrike() && this.frames.slice(-3)[0].isStrike() && this.bonusRoll < 1
}

FrameLog.prototype._previousFrame = function(){
  return this.frames[this.frames.length-2]
}

FrameLog.prototype._isPreviousFrameStrike = function(){
  return this.frames[this.frames.length-2].isStrike()
}

FrameLog.prototype._isPreviousFrameSpare = function(){
  return this.frames[this.frames.length-2].isSpare()
}

FrameLog.prototype.frameCount = function(){
  return this.frames.length
}
