function Game() {

  this.score = 0;
  this.frameScore = 0;
  this.frameNumber = 1;
  this.firstThrow = true;
  this.strikeBall = false;
  this.scoreBoard = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]}
};

Game.prototype.rollBall =  function(hit) {
  if (this.strikeBall === !true) {
      this.scoreBoard[this.frameNumber].push(hit);
    } else {
      this.scoreBoard[this.frameNumber].push(hit*2);
      this.strikeBall = false;
    };

  this.score += hit;
  if (this.firstThrow === false) {
    this.frameNumber +=1;
    this.firstThrow = true;
  } else {
    this.firstThrow = false;
  };
  this.isStrike(hit);
  this.isSpare(hit);
};

Game.prototype.isStrike = function(hit) {
  if (hit === 10) {
    this.frameNumber += 1;
    this.strikeBall = true;
    this.firstThrow = true;
  };
};

Game.prototype.isSpare = function(hit) {
  if (this.frameScore === 10) {

  };
};
