var Bowling = function(){
  this.roll1 = 0;
  this.roll2 = 0;
  this.spareBonus = 0;
  this.strikeBonus1 = 0;
  this.strikeBonus2 = 0;
  this.totalStrikeBonus = 0;
  this.total = 0;
  this.isStrike = false;
  this.isSpare = false;
};
//

Bowling.prototype.firstRoll = function(value){
  this.strikeBonus2 = 0
  this.totalStrikeBonus = 0
  if (this.roll1 === 10 && value === 10) {this.totalStrikeBonus = this.roll1 + value + this.roll2}
  this.roll1 = 0

  if (this.isStrike === true) {this.strikeBonus1 = value}
  if (this.isSpare === true) {this.spareBonus = value, this.isSpare = false}


  this.roll1 = value;
  //if ((this.isStrike === true) && (this.strikeBonus1 === 10) && (this.roll === 10)) {this.totalStrikeBonus = this.strikeBonus1 + value}
  this.total = this.total + this.roll1 + this.strikeBonus1 + this.spareBonus + this.totalStrikeBonus;

  if (this.roll1 === 10) {this.isStrike = true, this.isSpare = false}
};

Bowling.prototype.secondRoll = function(value){
  this.spareBonus = 0;
  this.roll2 = 0
  if (this.isStrike === true) {this.strikeBonus2 = value}
  this.totalStrikeBonus = this.strikeBonus1 + this.strikeBonus2
  this.strikeBonus1 = 0

  this.roll2 = value;
  this.total = this.total + this.roll2 + this.strikeBonus2;


  if (this.roll1 + this.roll2 === 10) {this.isSpare = true, this.isStrike = false}
  else {this.isSspare = false, this.isStrike = false}
};
