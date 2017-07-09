function Game() {
  this.board = [],
  this.currentScore = []
  this.currentFrame = [];
};


Game.prototype.hasKnockedDown = function (pins) {
  this.recordScore(pins);
};


Game.prototype.roll = function() {
  var pinsKnockedDown = Random(this.checkPinsOnLane());
  this.hasKnockedDown(pinsKnockedDown);
  return pinsKnockedDown;
};

function Random(pinsOnLane) {
  return Math.floor(Math.random()*(pinsOnLane + 1));
};

Game.prototype.checkPinsOnLane = function () {
  if (this.currentFrame[0] && this.currentFrame[0] != 10) {
    return 10 - this.currentFrame[0]
  } else {
    return 10
  }
};

Game.prototype.recordScore = function (pins) {
  this.currentFrame.push(pins)
  if (pins === 10 || this.currentFrame.length === 2) {
    this.board.push(this.currentFrame);
    this.currentFrame = [];
  }
};


Game.prototype.checkTypeFrame = function (frame) {
  if (frame[0] === 10) {
    return "Strike"
  } else if (frame.reduce((a, b) => a + b, 0) === 10) {
    return "Spare"
  }
};


// var game = new Game();
//
//
// for (var i = 1; i <= 20; i++) {
//   game.roll();
// };
