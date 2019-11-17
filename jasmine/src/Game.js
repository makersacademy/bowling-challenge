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
  if (this.isPerfectGame() === true) {
    return 300;
  } else {
    calculator = new Calculator(this._frames);
    return calculator.classify()
  };
};
