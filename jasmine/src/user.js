function UserScore() {
  this.frames = []
}

UserScore.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};
