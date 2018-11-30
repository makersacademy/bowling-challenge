function Game() {
  this.current_frame_points = 0;
  this.roll = 1;
}

Game.prototype.calculateFramePoints = function (pins) {
  this.current_frame_points += pins;
};

Game.prototype.getFramePoints = function () {
  return this.current_frame_points;
};

Game.prototype.updateFrame =  function () {
  if (this.roll == 1) {
    this.roll += 1;
  } else if (this.roll == 2) {
    this.current_frame_points = 0;
    this.roll = 1;
  }
};
