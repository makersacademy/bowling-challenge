function Game() {
  this.frames = []
  this.testFrames = [
    new Frame(3, 5),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(4, 2),
    new Frame(6, 4), // Spare
    new Frame(2, 5),
    new Frame(10),  // Strike
    new Frame(1, 3),
  ]
  this.totalScore = 0;
  this.savedBowl = -1;
}

Game.prototype.bowl = function(n) {
  if (this.savedBowl !== -1) {
    this.frames.push(new Frame(this.savedBowl, Number(n)));
    this.savedBowl = -1;
    updateScores();
    this.totalScore = 0;
  } else {
    this.savedBowl = Number(n);
  }
}

Game.prototype.strikeCalc = function(i) {
  if (i + 1 === this.frames.length) { return " " };
  if (this.frames[i + 1].isStrike()) {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
  } else {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 1].score[1]);
  };
};
