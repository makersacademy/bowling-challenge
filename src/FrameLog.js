function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
  this.currentFrame = null
}

FrameLog.createFrameLog = function(){
  return new FrameLog()
}

FrameLog.prototype.currentFrameValue = function(){
  return this.currentFrame
}

FrameLog.prototype.startFrame = function(firstRollScore){
  let frame = this.frameClass.createFrame(firstRollScore)
  this.frames.push(frame)
  if (!frame.isStrike()) this.currentFrame = frame
}

FrameLog.prototype.endFrame = function(secondRollScore){
  this.currentFrame.setSecondRoll(secondRollScore)
  this.currentFrame = null
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
