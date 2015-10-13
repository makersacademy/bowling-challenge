function Game() {
  this.TOTAL_FRAMES = 10;
  this.gameFrames = [];
  this.currentScore = 0;
}

Game.prototype.knockDown = function(numberOfPins) {
  if (this.gameFrames.length === 0 ||
    this.gameFrames[this.gameFrames.length - 1].pinCount === 0) {
    this.gameFrames.push(new Frame(this.gameFrames.length));
  } else if (this.gameFrames[this.gameFrames.length - 1].totalOfRolls >= 2) {
    this.gameFrames.push(new Frame(this.gameFrames.length));
  }

  this.gameFrames[this.gameFrames.length - 1].removePins(numberOfPins);
  console.log(this.gameFrames);
};

Game.prototype.totalScore = function() {
  for (var i = 0; i < this.gameFrames.length; i++) {
    if (this.gameFrames[i].totalOfRolls >= 2) {
      this.currentScore += this.gameFrames[i].score();
    }
  }

  return this.currentScore;
};
