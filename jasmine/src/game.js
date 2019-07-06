function Game() {
  this.current_frame = 1;
  this.frames = [];
};

Game.prototype.make_frames = function(number=10, frame=Frame) {
  x = 0
  while (x < number) {
    this.frames.push(new Frame);
        x += 1
  }
};
