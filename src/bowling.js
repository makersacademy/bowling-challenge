function Bowling(){
  this.pin_score = []
  this.total_frame_score = []
}

Bowling.prototype.score = function() {
  return this.pin_score[0];
};

Bowling.prototype.pins = function(number) {
  this.pin_score.push(number);
};

Bowling.prototype.frame = function(a,b) {
 this.total_frame_score.push(a,b);
}

Bowling.prototype.frame_score = function() {
  return this.total_frame_score[0].reduce(function (a, b) {return a + b;}, 0);
};
