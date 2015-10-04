function Game() {
  this.scoreBoard = [];
  for(i=0; i<10; i++) this.scoreBoard[i]={roll1: 0, roll2: 0, frameTotal: 0};
  this.frameNum = 0;
  this.rollNum = 1;
}

Game.prototype.roll = function(pins) {
  if (this.rollNum === 1) {
    this.scoreBoard[this.frameNum].roll1 = pins;
    this.rollNum = 2;
    this.subtotal();
  } else if (this.rollNum === 2) {
    this.scoreBoard[this.frameNum].roll2 = pins;
    this.subtotal();
    this.nextFrame();
  }
};

Game.prototype.subtotal = function(framescores) {
  this.scoreBoard[this.frameNum].frameTotal = this.scoreBoard[this.frameNum].roll1 + this.scoreBoard[this.frameNum].roll2;
}

Game.prototype.totalScore = function(allFrameScores) {
  var result = 0;
  for (i = 0; i < 10; i ++) {
    result += this.scoreBoard[i].frameTotal;
  }
  return result;
};

Game.prototype.nextFrame = function() {
  this.frameNum++;
  this.rollNum = 1;
};
