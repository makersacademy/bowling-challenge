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

Game.prototype.isGutterGame = function() {
  framesScore = this._frames.flat();
  totalScore = framesScore.reduce(function (accumulator, roll) {
    return accumulator + roll;
  }, 0);
  if (totalScore === 0) {
    return true;
  }
};

Game.prototype.calculateScore = function() {
  if (this.isPerfectGame() === true) {
    return 300;
  } else if (this.isGutterGame() === true) {
    return 0; }
  // } else {
  //   frame = new Frame(this._frames);
  //   frame.calculateScore();
  // }
};
