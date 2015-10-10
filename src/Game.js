function Game() {

  this.score = 0;
  this.frameScore = 0;
  this.frameNumber = 1;
  this.firstThrow = true;
  this.spareBall = false;
  this.strikeBall = false;
  this.tenthFrameBonus = false;
  this.gameOver = false;
  this.scoreBoard = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]}
};

Game.prototype.rollBall =  function(hit) {

  if (this.frameNumber < 10 && this.gameOver === false) {

    this.addToScoreBoard(hit);
    this.frameScore += hit;
    this.isSpare(hit);
    this.isFirstThrow();
    this.isStrike(hit);
    this.resetFrameScore();
  } else if (this.frameNumber === 10 && this.gameOver === false) {
    this.addToScoreBoard(hit);
    this.frameScore += hit;
    this.isSpare();
    this.isStrike();
    this.game();
  };
};

Game.prototype.addToScoreBoard = function(hit) {
  if (this.strikeBall === true) {
    this.scoreBoard[this.frameNumber].push(hit*2);
    this.score += (hit*2);
    this.strikeBall = false;
  } else if (this.spareBall === true) {
    this.scoreBoard[this.frameNumber].push(hit*2);
    this.score += (hit*2);
    this.spareBall = false;
  } else {
    this.scoreBoard[this.frameNumber].push(hit);
    this.score += (hit);
  };
};

Game.prototype.isFirstThrow = function() {
  if (this.firstThrow === false) {
    this.frameNumber +=1;
    this.firstThrow = true;
  } else {
    this.firstThrow = false;
  };
};

Game.prototype.isStrike = function(hit) {
  if (hit === 10 && this.frameNumber != 10) {
    this.frameNumber += 1;
    this.strikeBall = true;
    this.firstThrow = true;
  } else if (hit === 10 && this.frameNumber === 10) {
    this.tenthFrameBonus = true;
  };
};

Game.prototype.isSpare = function(hit) {
  if (this.frameScore === 10 && this.frameNumber != 10 && this.firstThrow === false) {
      this.spareBall = true;
  } else if (this.frameScore === 10 && this.frameNumber === 10 && this.firstThrow === false) {
      this.tenthFrameBonus = true;
  };
};

Game.prototype.game = function() {
  if ((this.scoreBoard[10][2] != null)) {
    this.gameOver = true;
  } else if (this.scoreBoard[10][0] + this.scoreBoard[10][1] < 10) {
    this.gameOver = true;
};
};

Game.prototype.resetFrameScore = function() {
  if (this.firstThrow === true) {
    this.frameScore = 0;
  };
};
