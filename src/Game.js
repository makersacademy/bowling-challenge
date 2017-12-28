function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1
  this._pushFrame()
  this.score = 0;
};

Game.prototype.bowl = function(pins, bowls = 1) {
  // for(var i = 0; i < bowls; i++) {
  //   this.score += pins;
  // };
  this.currentFrame.bowl(pins)
  if(this.currentFrame.isAStrike()) { this._nextFrame() }
  if(this.currentFrame.bowlIndex > 2) { this._nextFrame() }
};

Game.prototype._nextFrame = function() {
  this.currentFrame = new Frame();
  this._pushFrame();
  this.frameIndex++;
}

Game.prototype._pushFrame = function() {
  this.frames.push(this.currentFrame);
}
