function Bowling() {
  this.score = 0;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.turnTotalScore = 0;
  this.strike = false;
  this.spare = false;
  this.scoreCard = {};
  this.wasStrike = true;
}

Bowling.prototype.turnScore = function() {
  if(this.strike === false && this.spare === false) {
  this.turnTotalScore = (this.firstBowlScore + this.secondBowlScore);
} else if (this.strike === true){
  this.turnTotalScore = 'X';
} else if (this.spare === true){
  this.turnTotalScore = '/';
}
};

Bowling.prototype.firstBowl = function(score) {
  this._wasStrike();
  this.firstBowlScore = score;
  if (score === 10){
    this.strike = true;
  } else {
    this.strike = false;
  }
};

Bowling.prototype.secondBowl = function(score) {
  this._wasSpare();
  this.secondBowlScore = score;
  if (this.firstBowlScore + this.secondBowlScore === 10 && this.strike === false) {
    this.spare = true;
  } else {}
  this.turnScore();
};

Bowling.prototype._wasStrike = function () {
  if (this.strike === true) {
    this.wasStrike = true;
  }
  this.strike = false;
};

Bowling.prototype._wasSpare = function () {
  if (this.spare === true) {
    this.wasSpare = true;
  }
  this.spare = false;
};

Bowling.prototype.endTurn = function() {
  this.scoreCard.push.apply(this.turnTotalScore, [this.firstBowlScore, this.secondBowlScore]);
};

// NOT SURE ABOUT THIS STATEMENT
Bowling.prototype.strikeBonus = function () {
  this.turnTotalScore = (this.turnTotalScore * 2);
};
//  NEED TO LOOK UP HOW TO calculate
Bowling.prototype.spareBonus = function () {
this.firstBowlScore = (this.firstBowlScore * 2);
};

Bowling.prototype.strike = function() {
  this.turnTotalScore = 10;
  this.strikeBonus();
};

Bowling.prototype.spare = function() {
  this.turnTotalScore = 10;
  this.spareBonus();
};
