function Game() {
  this.board = [],
  this.currentScore = 0,
  this.currentFrame = []
};

Game.prototype.hasKnockedDown = function (pins) {
  this.recordPins(pins);
};

function getLastElement(array) {
  if (array.length > 1) {
    return array.splice(-1)[0]
  }
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

Game.prototype.addNewFrame = function () {
  this.board.push({frame: this.currentFrame, score: this.setScore(this.currentFrame), type: this.setTypeFrame(this.currentFrame)});
};

Game.prototype.recordPins = function (pins) {
  this.currentFrame.push(pins)
  if ((pins === 10 || this.currentFrame.length === 2) && !this.isBonusRound()) {
    this.addNewFrame();
    this.currentFrame = [];
  } else if (this.isBonusRound() && this.currentFrame.length === 3) {
    this.addNewFrame();
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


Game.prototype.setScore = function (frame) {
  return  this.currentScore += (frame[0] + frame[1]);
};
