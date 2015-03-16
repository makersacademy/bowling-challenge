BowlingFrame = function(){
  this.rolls = [];
  this.bonus = 0;
  this.strike = false;
  this.spare = false;
};


BowlingFrame.prototype.saveRoll = function (pins) {
  this.rolls.push(pins);
  this.special()
};


BowlingFrame.prototype.special = function (first_argument) {
  if(this.rolls.length == 2 && this.rolls[0] + this.rolls[1] == 10){
    this.spare = true;
  }else if(this.rolls[0] == 10){
    this.strike = true;
  };
};
