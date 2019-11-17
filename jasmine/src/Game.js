Game = function(frames) {
  this._frames = frames
};

Game.prototype.isPerfectGame = function() {
  framesScore = this._frames.flat();
  totalScore = framesScore.reduce(function (accumulator, roll) {
    return accumulator + roll;
  }, 0);
  if (totalScore === 210) {
    return true;
  }
};

Game.prototype.calculateScore = function() {
  console.log("calculateScore called")
  if (this.isPerfectGame() === true) {
    console.log("if statement true");
    return 300;
  };
};
