function Bowling(){
  this.frame_number = 1;
}

Bowling.prototype.frame = function() {
  return this.frame_number
};

Bowling.prototype.frame_increase = function() {
  this.frame_number += 1;
};
