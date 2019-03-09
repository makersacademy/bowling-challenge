function Frame() {

}

function Bowling() {
  this.totalScore = 0;
  this.frames = new Array(10);
  this.frames.fill(new Frame(), 0, -1);

}
