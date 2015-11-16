function Bowling(frame, numberOfFrames) {

  this.gameFrames = [];
  for (var i = 0; i < numberOfFrames; i++) {
    this.gameFrames.push(new frame);
  }
}
