function Game() {
  this.scores = [];
  this.roll = 1;
  this.FRAMES = 10;
  this.rollsPerFrame = 2;
  this.PINS = 10;
  this.previousRoll = 0;
}

Game.prototype.addScore = function ( score ) {
  if (this.roll === 1) {
    this.scores.push(score);
    this.previousRoll = score;
    this.roll = 2;
  } else if (this.roll === 2) {
    if (this.previousRoll + score > 10) throw new Error("Number of pins in frame cannot be above 10.")
    this.scores.push(score);
    this.previousRoll = score;
    this.roll = 1;
  }
  if (this.scores.length > (this.FRAMES * this.rollsPerFrame)) {
    throw new Error("Cannot add more scores.")
  };
};

// Array prototype

// Array.prototype.insert = function (index, item) {
//   this.splice(index, 0, item);
// };
