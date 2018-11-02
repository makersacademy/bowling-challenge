function Game() {
  this.scores = [];
  this.frame = [];
  this.FRAMES = 10;
  this.rollsPerFrame = 2;
  this.PINS = 10;
  this.previousRoll = 0;
}

Game.prototype.addScore = function ( score ) {
  this.scores.push(score);
  if (this.scores.length > this.FRAMES) {
    throw new Error("Cannot add more scores.")
  };
  if (this.previousRoll + score > 10) {
    throw new Error("Number of pins in frame is above 10.")
  }
  this.previousRoll = score;
};

// Array prototype

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
