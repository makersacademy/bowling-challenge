function Game() {
  this.frame = 0;
  this.turn = 0;
  this.scoreCard = [[],[],[],[],[],[],[],[],[],[]];
  this.frameScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.pinsStruck = 0;
  this.strike = false;
  this.spare = false;
  this.pinsLeft = 10;
  this.gameOver = false;
  this.canGothirdTurn = false;
}

Game.prototype.roll = function(pins) {
  // this.pinsStruck = Math.floor(Math.random() * (pins + 1));
  if (this.gameOver) {
    throw("Game Over");
  } else {
    this.pinsStruck = pins;
    this.addScore();
    this.pinsLeft = this.pinsLeft - this.pinsStruck;
    if (this.frame === 9) {
      this.lastFrame()
    } else {
      this.setTurn();
    }
    return this.pinsStruck;
  }
};

Game.prototype.lastFrame = function (){
  this.turn += 1;

  if (this.pinsLeft === 0) {
    this.pinsLeft = 10;
    this.canGoThirdTurn = true;
  }
  if (this.canGoThirdTurn && this.turn === 3) {
    this.gameOver = true;
  }
  if (this.turn === 2) {
    this.gameOver = true;
  }

};

Game.prototype.addScore = function() {
  this.scoreCard[this.frame][this.turn] = this.pinsStruck;
  this.frameScore[this.frame] += this.pinsStruck;
  if (this.strike) { this.addBonusWhenStrike();}
  if (this.spare) { this.addBonusWhenSpare(); }
};

Game.prototype.addBonusWhenStrike = function() {
  if (this.frame < 9) {
    this.frameScore[this.frame-1] += this.pinsStruck;
    if (this.turn === 1) { this.strike = false;}
  } else {
    this.thirdTurn = true;
  }
  this.frameScore[this.frame]   += this.pinsStruck;
};

Game.prototype.addBonusWhenSpare = function() {
  if (this.frame < 9 ) {
    this.frameScore[this.frame-1] += this.pinsStruck;
    this.spare = false;
  } else {
    this.thirdTurn = true;
  }
  this.frameScore[this.frame]   += this.pinsStruck;
};

Game.prototype.setTurn = function(){
  if (this.pinsLeft === 0){
    this.checkIfStrike();
    this.checkIfSpare();
    this.pinsLeft = 10;
    this.turn = 1;
  }
  switch (this.turn) {
    case 0:
      this.turn += 1;
      break;
    case 1:
      this.turn = 0;
      this.frame += 1;
      this.pinsLeft = 10;
      this.frameScore[this.frame] = this.frameScore[this.frame-1];
      break;
  }
};

Game.prototype.checkIfStrike = function() {
  if (this.pinsStruck === 10) {
    this.strike = true;
  }
  if (this.frame === 9) { this.strike = false; }
};

Game.prototype.checkIfSpare = function() {
  if (this.strike === false) { this.spare = true; }
  if (this.frame === 9) { this.spare = false; }
};
