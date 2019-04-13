
function Bowl(frame, roll1, roll2, score) {
  this.frame = frame;
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.score = score;
};


Bowl.prototype.add = function(roll1, roll2) {
  this.score += (roll1 +roll2)
  this.frame += 1
};
