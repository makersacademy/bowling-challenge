function Game() {
  this.frame1 = new Frame(1);
}

Game.prototype.makeFrame = function (number) {
  frame = new Frame(number)
  this.gameFrames << frame
};
