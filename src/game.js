function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
  this.currentFrameObject = null; // this will be refreshed every frame to the newly created Frame
  this.scoreSheet = []; //[Frame, Frame] stores individual frames
}

Game.prototype.logRoll = function(pinsKnocked) {

  if (this.currentFrameObject == null) {
    //create the frame object for every new frame(round)
    this.currentFrameObject = new Frame();
    this.frameIndex += 1;//
  }

  //if its on its first roll:
  if (this.currentFrameObject.rollIndex == 0) {

  }

  this.scoreSheet.push(this.currentFrameObject); // frame finished add the frame to scoreSheet:

};

Game.prototype.rollBall = function(pinsKnocked) {
  this.logRoll(pinsKnocked);
}
