function Frame() {
  this.frames = [];
  this.currentFrame = [];
}

Frame.prototype.receivePins = function(pins) {
  if (this.currentFrame.length < 2) {
    this.currentFrame.push(pins);
    if (this.currentFrame.length === 2) {
      this.frames.push(this.currentFrame);
      this.currentFrame = [];
    };
  };

Frame.prototype.getFrameResults = function() {
  return this.frames;
};


}
