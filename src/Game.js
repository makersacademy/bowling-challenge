function Game() {
  this.frames = [
    new Frame(1, 3),
    new Frame(10),  // Strike
    new Frame(2, 5),
    new Frame(6, 4), // Spare
    new Frame(4, 2),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(3, 5)
  ]
  this.totalScore = 0;
}

Game.prototype.calculateTotal = function() {
    for (i = 0; i < this.frames.length; i++) {
      if (this.frames[i].isSpare()) {
        this.totalScore += this.frames[i].calculate() + this.frames[i + 1].score[0];
      } else if (this.frames[i].isStrike()) {
        this.totalScore += this.strikeCalc(i);
      } else {
        this.totalScore += this.frames[i].calculate()
    };
  };
};

Game.prototype.strikeCalc = function(i) {
  if (i + 1 === this.frames.length) { return " " };
  if (this.frames[i + 1].isStrike()) {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
  } else {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 1].score[1]);
  };
};
