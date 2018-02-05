function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
}

FrameLog.createFrameLog = function(){
  return new FrameLog()
}

FrameLog.prototype.currentFrame = function(){
  return this.frames.slice(-1)[0]
}

FrameLog.prototype.addRoll = function(rollScore){
  if(this.frameCount() === 0){
    let frame = this.frameClass.createFrame()
    frame.addRoll(rollScore)
    this.frames.push(frame)
  } else if (this.currentFrame().isComplete()) {
    let frame = this.frameClass.createFrame()
    frame.addRoll(rollScore)
    this.frames.push(frame)
  } else{
    this.currentFrame().addRoll(rollScore)
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
