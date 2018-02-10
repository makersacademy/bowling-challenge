const FRAME_LIMIT = 10;

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
  if(this.isFramelogComplete()) throw "Frame set is complete - no more roll's allowed"
  if(this.frameCount() === 0 || this.currentFrame().isComplete()){
    let frame = this.frameClass.createFrame(this._isFinalFrame())
    frame.addRoll(rollScore)
    this.frames.push(frame)
  } else{
    this.currentFrame().addRoll(rollScore)
  }
}

FrameLog.prototype.frameCount = function(){
  return this.frames.length
}
// 
// FrameLog.prototype.isPreviousFrameStrike = function(){
//   return this.frames[this.frames.length-2].isStrike()
// }
// FrameLog.prototype.isPreviousFrameSpare = function(){
//   return this.frames[this.frames.length-2].isSpare()
// }

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

FrameLog.prototype.calculateScore = function(){
  if(this.frameCount() === 0) return 0
  return this._frameScores().reduce((total,amount) => total + amount)
}

// each frame holds three rolls for scoring then can add logic to work out if need all three
// but also each frame tholds own rollScore
// some repeated information
// some condition only in strike adds next two rolls to frame rules method will all rules in frame
// for how to calculate score

// after strike logic could be added to add rolls to a bonus array and frame ?
