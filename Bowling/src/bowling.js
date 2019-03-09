function Frame(frameNumber) {
  this.frameNumber = frameNumber;
}

function Bowling() {
  this.totalScore = 0;
  this.frames = new Array(10);
  this.populateFrames();
}

Bowling.prototype.populateFrames = function populateFrames() {
  for (let index = 0; index < this.frames.length; index++) {
    this.frames[index].frameNumber = new Frame(index + 1);
  }
};
