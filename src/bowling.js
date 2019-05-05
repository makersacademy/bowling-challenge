function Bowling(){
  this.frame_number = 1;
  this.score = 0
}

Bowling.prototype.frame = function() {
  return this.frame_number
};

Bowling.prototype.frame_increase = function() {
  this.frame_number += 1;
};

Bowling.prototype.frame_score = function() {
  return this.score
};
