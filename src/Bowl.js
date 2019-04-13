
function Bowl(frame, roll1, roll2, score, bonus) {
  this.frame = frame;
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.score = score;
  this.bonus = []
};


Bowl.prototype.add = function(roll1, roll2) {
  this.score += (roll1 +roll2)
  this.frame += 1
};

Bowl.prototype.bonusCalc = function(roll1, roll2, frame, score) {
  if (this.frame == 10 && this.score == 0) {
    this.bonus.push("Gutter");
  }
};
