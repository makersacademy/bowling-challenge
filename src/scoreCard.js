function Scorecard(FrameContainer){
  this.frames = [];
  for(var i = 0; i < 12; i++){
    this.frames.push(new FrameContainer());
  }
  this.currentFrame = 0;
  this.gameOver = false;
}
