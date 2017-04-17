function Game() {
  this.pins = 0;
  this.frames = [
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false},
    {firstRoll:false, secondRoll:false}
  ]
}

Game.prototype.roll = function(pins) {
  this.pins += pins;
  for (i = 0; i < this.frames.length; i++) {
    if (this.frames[i].firstRoll === false) {
      this.frames[i].firstRoll = pins;
      if (pins > 10) {
        throw new Error("No more pins");
      } else if (pins === 10) {
        this.frames[i].secondRoll = 0;
      }
      return;
    } else if (this.frames[i].secondRoll === false) {
      if (this.frames[i].firstRoll + pins > 10) {
        throw new Error("No more pins");
      } else {
        this.frames[i].secondRoll = pins;
        return;
      }
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