function Frame() {
  this.roll1 = 0
  this.roll2 = 0
  this.bonus = 0
}

Frame.prototype.firstRoll = function(score){
  this.roll1 = score;
};

Frame.prototype.secondRoll = function(score){
  this.roll2 = score;
};

Frame.prototype.checkBonus= function(score){
  if(this.roll1 === 10){
    this.bonus = "strike";
  }
  else if(this.roll1 + this.roll2 === 10){
    this.bonus = "spare";
  }
  else {
    this.bonus = "open";
  };
};
