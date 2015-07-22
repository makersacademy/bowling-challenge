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

    if (this.frames[i].isStrike && this.frames[i] != this.frames[9]) {
        this.frames[i].bonus = this.frames[i + 1].rollScore;
        this.frames[i].addScore();
      
      if (this.frames[i + 1].isStrike) {
        this.frames[i].bonus = 10 + this.frames[i + 2].roll1;
        this.frames[i].addScore();
      } 
    }
    
    if (this.frames[9].isStrike) {
      this.frames[9].bonus = this.frames[9].roll3;
    }

    if (this.frames[i].isSpare === true && !this.frames[9]) {
      this.frames[i].bonus = this.frames[i + 1].roll1; this.frames[i].addScore();
    }
    
    else {
      this.frames[i].addScore();
    }
  }
};

BowlingGame.prototype.addFrameScore = function () {
  this.addBonus();
};

BowlingGame.prototype.addTotalScore = function () {
  for (var i in this.frames) {
    this.gameTotalScore += this.frames[i].totalScore;
  }
};

BowlingGame.prototype.checkLastFrame = function () {
  if (this.frames[9].isStrike) {
    this.frames[9].bonusRoll();
  }
  if (this.frames[9].isSpare && this.frames.length < 11) {
    this.frames.push(new Frame()); this.frames[10].roll2 = 0;
  }
};

var Frame = function(){
this.roll1 = 0;
this.roll2 = 0;
this.rollScore = 0;
this.bonus = 0;
this.totalScore = 0;
};

Frame.prototype.roll = function (pins) {
  if (this.roll1 === 0) {this.roll1 = pins; return this.roll1;}
  if (this.roll1 === (1-10)) {throw new Error('Roll not allowed');}
};

Frame.prototype.rollAgain = function (pins) {
  if (this.roll2 === 0 && this.roll1 != 10) {this.roll2 = pins;  return this.roll2;}
  if (this.roll2 === (1-10)) {throw new Error('Roll not allowed');}
};

Frame.prototype.addRolls = function () {
  // if (this.roll3) {this.rollScore = this.roll1 + this.roll2 + this.roll3;}
  this.rollScore = this.roll1 + this.roll2;
  if (this.roll1 === 10 && this.roll2 === 0) { this.isStrike = true;}
  if (this.roll1 + this.roll2 === 10 && this.roll1 != 10) {this.isSpare = true;}
};

Frame.prototype.addScore = function() {
  this.totalScore = this.rollScore + this.bonus;
};

Frame.prototype.bonusRoll = function (pins) {
  this.roll3 = pins;
};

