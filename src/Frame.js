function Frame(roll_one, roll_two){
  this.roll_one = roll_one;
  this.roll_two = roll_two;
  this.score = roll_one + roll_two;
};

Frame.prototype.isStrike = function(){
  return this.roll_one === 10;
};

Frame.prototype.isSpare = function(){
  return this.roll_one != 10 && this.roll_one + this.roll_two === 10;
};
