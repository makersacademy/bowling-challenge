var Game = function(){
  this.FINAL_FRAME = 10;
  this.MAX_FRAMES = 12;
  this.frameCount = 0;
  this.score = 0;
  this.points = [];
};

Game.prototype.startNewFrame = function(){
  var self = this;
  this.frame = new Frame(function finishFrame(frame){
    self.endFrame(frame);
  });
  this.frameCount += 1;
}

Game.prototype.endFrame = function(frame){
  this.score += frame.score;
  this.points.push(frame);
  this.endGame(frame)
}

Game.prototype.isLastFrame = function(){
  return this.frameCount === this.FINAL_FRAME
}

Game.prototype.isFinalFrame = function(){
  return this.frameCount === this.MAX_FRAMES
}

Game.prototype.isFrameTenEnd = function(frame){
  return !frame.isStrike() && !frame.isSpare()
}

Game.prototype.isFrameElevenEnd = function(frame){
  return (this.points[this.points.length-2].isStrike() && !frame.isStrike()) || (this.points[this.points.length-2].isSpare())
}

Game.prototype.endGame = function(frame){
  if (this.frameCount === 10) {
    if (this.isLastFrame() && this.isFrameTenEnd(frame)) {
      return "Game over!"
    }
  }
  else if (this.frameCount === 11) {
    if (this.isFrameElevenEnd(frame)) {
      return "Game over!"
    }
  }
  else if (this.frameCount === 12) {
    if (this.isFinalFrame()) {
      return "Game over!"
    }
  } else {
    this.startNewFrame();
  }
}

Game.prototype.calculateBonusPoints = function(frame){
  var framePosition = this.points.indexOf(frame);
  var nextFrame = this.points[framePosition + 1];

  if (frame.isSpare()) {
    return nextFrame.points[0];
  }

  if (frame.isStrike()) {
    if (nextFrame.points.length === 2) {
      return nextFrame.score;
    } else {
      var secondFrame = this.points[framePosition + 2];
      return nextFrame.score + secondFrame.points[0];
    }
  }
  else {
    return 0;
  }
}

Game.prototype.addBonusPoints = function(frame){
  frame.bonus = this.calculateBonusPoints();
}
