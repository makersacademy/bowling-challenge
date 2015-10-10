function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
}

Game.prototype.logRoll = function() {

  this.currentFrameObject = new Frame();
  this.frameIndex += 1;
  this.scoreSheet.push(this.currentFrameObject); // frame finished add the frame to scoreSheet:

}
