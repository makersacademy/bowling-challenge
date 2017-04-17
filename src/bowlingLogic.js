var BowlingGame = function(){

this.frames = [
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
];
this.gameTotalScore = 0;
};

BowlingGame.prototype.addGameRolls = function () {
  for ( var i = 0; i < this.frames.length; i++) {
    this.frames[i].addRolls();
  }
};

BowlingGame.prototype.addBonus = function () {

  for ( var i = 0; i < this.frames.length; i++) {
    this.frames[i].addRolls();

    if (this.frames[i].isStrike && this.frames[i] != this.frames[9]) {
        this.frames[i].bonus = this.frames[i + 1].rollScore;
        this.frames[i].addScore();
      
      if (this.frames[i + 1].isStrike && this.frames[i] != this.frames[8]) {
        this.frames[i].bonus = 10 + this.frames[i + 2].roll1;
        this.frames[i].addScore();
      } 
    }

    if (this.frames[i].isSpare && this.frames[i] != this.frames[9]) {
      this.frames[i].bonus = this.frames[i + 1].roll1; this.frames[i].addScore();
    }
    
    if (this.frames[8].isStrike || this.frames[8].isSpare) {
      this.frames[8].bonus = this.frames[9].bonus;
      this.frames[i].addScore();
    }
    
    else {
      this.frames[i].addScore();
    }
  }
};

BowlingGame.prototype.addTotalScore = function () {
  for (var i in this.frames) {
    this.gameTotalScore += this.frames[i].totalScore;
  }
};

BowlingGame.prototype.checkLastFrame = function () {
  if (this.frames[9].isStrike) {
    this.frames[9].bonusRoll();
    this.frames[9].bonusRollAgain();
  }
  if (this.frames[9].isSpare) {
    this.frames[9].bonusRoll();
  }
};

BowlingGame.prototype.addLastFrame = function () {
  this.frames[9].totalScore = this.frames[9].bonus + this.frames[9].roll1;
};