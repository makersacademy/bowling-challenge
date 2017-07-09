function Game() {
  this.currentScore = null,
  this.board = createEmptyBoard()
}

var currentFrame = 0;
var currentRound = 0;

Game.prototype.hasKnockedDown = function (pins) {
  this.recordScore(pins);
  this.checkCurrentFrameAndRound();
  this.setFrameType();
};

Game.prototype.roll = function () {
  var pinsKnockedDown = Random(this.checkPinsOnLane());
  this.hasKnockedDown(pinsKnockedDown);
  return pinsKnockedDown;
};

Game.prototype.checkPinsOnLane = function () {
  if (currentRound === 1) {
    return (10 - this.board[currentFrame].frame[0])
  } else {
    return 10
  }
};

Game.prototype.recordScore = function (pins) {
  this.board[currentFrame].frame[currentRound] = pins;
};

Game.prototype.checkCurrentFrameAndRound = function () {
  var currentFrameAndRound = this.getFrameAndRoundNr();
  currentFrame = currentFrameAndRound[0];
  currentRound = currentFrameAndRound[1];
};

Game.prototype.getFrameAndRoundNr = function () {
  for (var i = 0; i < 10; i++) {
    for (var j= 0; j < 2; j++) {
      if (this.board[i].frame[j] === null) {
        return [i, j];
      }
    }
  }
};

Game.prototype.setFrameType = function () {
  if (this.board[currentFrame].frame[0] === 10) {
    this.board[currentFrame].frameType = "Strike"
  }
};


function Random(pinsOnLane) {
  return Math.floor(Math.random()*(pinsOnLane + 1));
}

function createEmptyBoard() {
  var arr =[];
  for (var i = 1; i <= 10; i++) {
    arr.push({
      frame: [null, null],
      frameType: null,
      total: null
    })
  }
  return arr;
}

Game.prototype.readBoard = function () {
  for (var i = 0; i < 10; i++) {
    for (var j= 0; j < 2; j++) {
      console.log([i,j], this.board[i].frame[j], this.board[i].frameType)
    }
  }
}
var game = new Game();
for (var i = 1; i<=20; i++) {
  game.roll();
}

game.readBoard();
