function Game() {
  this.pins = 0;
  this.frames = [
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0},
    {firstRoll:0, secondRoll:0}
  ]
}

Game.prototype.roll = function(pins) {
  this.pins += pins;
  for (i = 0; i < this.frames.length; i++) {
    if (this.frames[i].firstRoll === 0) {
      this.frames[i].firstRoll = pins;
      return;
    } else if (this.frames[i].secondRoll === 0) {
      this.frames[i].secondRoll = pins;
      return;
    }
  }
};

Game.prototype.getTotalScore = function() {
  totalScore = 0
  for (i = 0; i < this.frames.length; i++) {
    totalScore += this.frames[i].firstRoll + this.frames[i].secondRoll;
  };
  return totalScore;
};

