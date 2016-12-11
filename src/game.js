var Game = function(){
  this.MAX_FRAMES = 10;
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
  if (this.hasEnded()) {
    return "Game over!"
  } else {
    this.startNewFrame();
  }
}

Game.prototype.hasEnded = function(){
  return this.frameCount === this.MAX_FRAMES
}
