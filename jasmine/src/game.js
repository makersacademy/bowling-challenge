function Game() {
  this.framesTotal = [];
}

Game.prototype.addFrames = function (frame) {
  if (this.framesTotal.length < 10) {
    this.framesTotal.push(frame);
  } else {
    throw new Error("You have reached the limit of frames for the game");
  }
};
