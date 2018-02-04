function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
  this.currentFrame = null
}

FrameLog.createFrameLog = function(){
  return new FrameLog()
}

FrameLog.prototype.startFrame = function(firstRollScore){
  this.currentFrame = this.frameClass.createFrame(firstRollScore)
  this._addFrame(this.currentFrame)
}

FrameLog.prototype.endFrame = function(secondRollScore){
  this.currentFrame.setSecondRoll(secondRollScore)
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

FrameLog.prototype.isCurrentFrameStrike = function(){
  return this.frames.slice(-1)[0].isStrike()
}
FrameLog.prototype.isCurrentFrameSpare = function(){
  return this.frames.slice(-1)[0].isSpare()
}

FrameLog.prototype._addFrame = function(frame){
  this.frames.push(frame)
}
