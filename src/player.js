function Player(name) {
  this.name = name;
  this.remainingFrames = 12;
  this.frames = [];
  this.currentFrame = new Frame();
}

Player.prototype.enterRoll = function(score) {
  if (this.currentFrame.returnIsComplete())
    { this._storeCurrentFrame()
      this._newFrame(score)
      this._reduceRemainingFrames() }
  else{ this.currentFrame.enterRoll(score)};
};

Player.prototype._newFrame = function(score) {
  frame = new Frame();
  frame.enterRoll(score);
  this.currentFrame = frame;
};

Player.prototype._storeCurrentFrame = function(){
  this.frames.push(this.currentFrame)
}

Player.prototype._reduceRemainingFrames = function() {
    this.remainingFrames -= 1;
};
