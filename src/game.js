// calculates the score of the entire game
function Game() {
  this.MAXFRAMES = 10;
  this.framesComplete = 0;
  this.scoreBoard = [];
  this.runningScore = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function(frame) {
  this.isGameOver();
  if(frame.strike === true) {
    this.scoreBoard.splice(this.framesComplete, 0, 'X');
  } else if(frame.spare === true) {
    this.scoreBoard.splice(this.framesComplete, 0, [frame.firstRollPins, "/"]);
  } else {
    this.scoreBoard.splice(this.framesComplete, 0, [frame.firstRollPins, frame.secondRollPins]);
  }
  this.runningScore.splice(this.framesComplete, 0, frame.totalPinsDown);
  this.calculateScore();
}

Game.prototype.isGameOver = function() {
  if(this.framesComplete >= this.MAXFRAMES) {
    throw `${this.MAXFRAMES} frames maximum.`
  } else {
    this.framesComplete += 1;
  }

  Game.prototype.calculateScore = function() {
    this.totalScore += this.runningScore[this.framesComplete - 1];
  }
}
