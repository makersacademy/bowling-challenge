function Game() {
  this.knockedPins1 = 0;
  this.knockedPins2 = 0;
  this.totalScore = 0;
  this.rolls = 0
  this.frames = 0;
  this.strike = false;
  this.spare = false;
  };

Game.prototype.roll = function(n1, n2) {
  this.strike = false;
  this.spare = false;
  this.rolls ++;
  this.frames ++;
  this.knockedPins1 = n1;
  this.knockedPins2 = n2;
  this.gameTotal();
  this.isSpare();
  this.isStrike();
};

Game.prototype.bonusSpareRoll = function(n1,n2) {
  this.strike = false;
  this.spare = false;
  this.rolls ++;
  this.frames ++;
  this.knockedPins1 = n1*2;
  this.knockedPins2 = n2;
  this.gameTotal();
  this.isSpare();
  this.isStrike();
}

Game.prototype.bonusStrikeRoll = function(n1,n2) {
  this.strike = false;
  this.spare = false;
  this.rolls ++;
  this.frames ++;
  this.knockedPins1 = n1*2;
  this.knockedPins2 = n2*2;
  this.gameTotal();
  this.isSpare();
  this.isStrike();
}

Game.prototype.gameTotal = function() {
  this.totalScore += this.knockedPins1 + this.knockedPins2;
};


Game.prototype.isStrike = function() {
  if(this.knockedPins1 == 10 || this.knockedPins2 == 10){
    this.spare = false;
    this.strike = true;
    }
};

Game.prototype.isSpare = function() {
  if(this.knockedPins1 + this.knockedPins2 == 10) {
    this.spare = true;
  }
};
