const FRAME_LIMIT = 10;

function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
  this.bonusRoll = 0
}

FrameLog.createFrameLog = function(){
  return new FrameLog()
}

FrameLog.prototype.currentFrame = function(){
  return this.frames.slice(-1)[0]
}

FrameLog.prototype.addRoll = function(rollScore){
  if(this.isFramelogComplete()) throw "Frame set is complete - no more roll's allowed"
  if(this.frameCount() === 0 || this.currentFrame().isComplete()){
    let frame = this.frameClass.createFrame(this._isFinalFrame())
    frame.addRoll(rollScore)
    this.frames.push(frame)
    this._addBonusScores(rollScore)
  } else {
    this.currentFrame().addRoll(rollScore)
    this._addBonusScores(rollScore)
  }
}

FrameLog.prototype.frameCount = function(){
  return this.frames.length
}

FrameLog.prototype.isPreviousFrameStrike = function(){
  return this.frames[this.frames.length-2].isStrike()
}

FrameLog.prototype.isPreviousFrameSpare = function(){
  return this.frames[this.frames.length-2].isSpare()
}

FrameLog.prototype._isFinalFrame = function(){
  return this.frameCount() === FRAME_LIMIT - 1
}

FrameLog.prototype.isFramelogComplete = function(){
  return this.frameCount() === FRAME_LIMIT && this.currentFrame().isComplete()
}

FrameLog.prototype._frameScores = function(){
  var scores = []
  this.frames.forEach(function(frame){
      scores.push(frame.score())
  })
  return scores
}

FrameLog.prototype._addBonusScores = function(rollScore){
  if(this.frameCount() > 1){
    if(this.currentFrame().isComplete() && this.isPreviousFrameStrike() && !this.currentFrame().isStrike()){
      this.frames[this.frames.length-2].addBonusRolls(this.currentFrame().rolls[1])
    } else if(this.isPreviousFrameSpare() || this.isPreviousFrameStrike() && this.bonusRoll < 3) {
      if (this.frameCount() === FRAME_LIMIT)
      this.bonusRoll++
      this.frames[this.frames.length-2].addBonusRolls(this.currentFrame().rolls[0])
      if (this.frameCount() === FRAME_LIMIT && this.bonusRoll > 1){
          this.bonusRoll++
        } else if (this.frameCount() >= 3 && this.isPreviousFrameStrike() && this.frames.slice(-3)[0].isStrike()){
        this.frames.slice(-3)[0].addBonusRolls(rollScore)
      }
    }
  }
}

FrameLog.prototype.calculateScore = function(){
  return this._frameScores().reduce((total,amount) => total + amount,0)
}
