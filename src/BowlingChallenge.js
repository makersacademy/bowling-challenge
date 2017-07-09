function Game() {
  this.board = [],
  this.currentScore = []
  this.currentFrame = [];
};

Game.prototype.hasKnockedDown = function (pins) {
  this.recordPins(pins);
};


Game.prototype.roll = function() {
  if (this.isGameFinished()) {
    alert("Game Finished!")
    return
  }
  var pinsKnockedDown = Random(this.setPinsOnLane());
  this.hasKnockedDown(pinsKnockedDown);
  return pinsKnockedDown
};

function Random(pinsOnLane) {
  return Math.floor(Math.random()*(pinsOnLane + 1));
};

Game.prototype.setPinsOnLane = function () {
  if (this.currentFrame[0] && this.currentFrame[0] != 10) {
    return 10 - this.currentFrame[0]
  } else {
    return 10
  }
};

Game.prototype.recordPins = function (pins) {
  this.currentFrame.push(pins)
  if ((pins === 10 || this.currentFrame.length === 2) && !this.isBonusRound()) {
    this.board.push(this.currentFrame);
    this.currentFrame = [];
  } else if (this.isBonusRound() && this.currentFrame.length === 3) {
    this.board.push(this.currentFrame);
  }
};

Game.prototype.isBonusRound = function () {
  if (this.board.length === 9 && this.setTypeFrame(this.currentFrame)) {
    return true
  }
};

Game.prototype.isGameFinished = function () {
  if (this.board.length === 10) {
    return true
  }
};

Game.prototype.setTypeFrame = function (frame) {
  if (frame[0] === 10) {
    return "Strike"
  } else if (frame[0] + frame[1] === 10) {
    return "Spare"
  }
};


// var game = new Game();
//
//
// for (var i = 1; i <= 18; i++) {
//   game.hasKnockedDown(2);
// };
