Frame.prototype.appendFrame = function(){
  this.frames = frames || 10;
  if ((this.frames < 1) || (this.frames > 10)) { throw 'Invalid number of frames'}
  if (this.frames === 1) {
      this._currentFrame = new FinalFrame();
    } else {
      this._currentFrame = new Frame();
    }
    this.frameNumber = 1;
    this._firstFrame = this._currentFrame;
}
