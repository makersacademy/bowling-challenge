function Bowling() {
 this.points = []
 this.lastScore = 0
 this.turn = 0
};

Bowling.prototype.throw = function(score) {
  this.lastScore = score
  this.turn += 1
  return this.lastScore
};

Bowling.prototype.record = function() {
  this.points.push(this.lastScore);
};

Bowling.prototype.resetPoint_Lscore_turn = function () {
  this.points = []
  this.lastScore = 0
  this.turn = 0
};
