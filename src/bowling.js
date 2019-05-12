function Bowling(){
  this.frame = [];
  this.game_score_total = [];
}

Bowling.prototype.pins = function(a) {
  this.frame.push(a);
};

Bowling.prototype.frame_score = function() {
  return this.frame.reduce(function(a, b){return a+b;})
};

Bowling.prototype.game_score = function() {
  this.game_score_total.push(this.frame.reduce(function(a, b){return a+b;}));
  return this.game_score_total.reduce(function(a){return a;})
};
