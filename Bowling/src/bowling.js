function Frame() {
  this.frameNumber;
}

function Bowling() {
  this.totalScore = 0;
  this.frames = new Array(10);


  // this.frames.forEach((frame) => {
  //   frame.frameNumber = this.frames.indexOf(frame);
  // });
}

Bowling.prototype.populateFrames = function () {
  this.frames.forEach((frame) => {
    frame = new Frame()
  })
};
