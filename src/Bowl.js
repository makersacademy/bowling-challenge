
function Bowl(frame, roll1, roll2, score, bonus, frameTotal) {
  this.frame = frame;
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.score = score;
  this.bonus = []
  this.frameTotal = 0
};


Bowl.prototype.add = function(roll1, roll2) {
  this.score += (roll1 + roll2)
  this.frame += 1
  this.frameTotal += (roll1 + roll2)
};

Bowl.prototype.bonusCalc = function(roll1, roll2, frame, score) {
  if (this.frame == 10 && this.score == 0) {
    this.bonus.push("Gutter")
  } else if (this.frameTotal == 10) {
    this.bonus.push("Strike")
    this.frameTotal = 0
  } else if (this.bonus[-1] == "Strike") {
    this.score += roll1
  };
};
