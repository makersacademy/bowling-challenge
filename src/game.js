function Game() {
  this.scores = [];
  this.FRAMES = 10;
  this.rollsPerFrame = 2;
  this.PINS = 10;
}

Game.prototype.addScore = function ( score ) {
  this.scores.push(score);
  if (this.scores.length > this.FRAMES) {
    throw new Error("Cannot add more scores.")
  };
};

// Array prototype

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
