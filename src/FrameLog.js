function FrameLog (frameClass) {
  this.frames = []
  this.frameClass = frameClass
  this.currentFrame = null
}

FrameLog.prototype._addFrame = function(frame){
  this.frames.push(frame)
}

FrameLog.prototype.startFrame = function(firstRollScore){
  this.currentFrame = this.frameClass.createFrame(firstRollScore)
  this._addFrame(this.currentFrame)
}
