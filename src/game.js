function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
}

Game.prototype.logRoll = function() {

  this.currentFrameObject = new Frame();
  this.frameIndex += 1;

  this.scoreSheet.push(this.currentFrameObject); // frame finished add the frame to scoreSheet:

}
