var Scorecard = function() {
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 0;
  this.current_bowl = 0;
};

Scorecard.prototype.add_points = function(points) {
  this.frames[this.current_frame][this.current_bowl] = points;
  this.current_bowl === 0 ? this.current_bowl = 1 : this.current_bowl = 0;
  if (this.frames[this.current_frame].length === 2) {
    this.current_frame += 1;
  }
};