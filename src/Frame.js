function Frame(){
  this.roll_one = 0;
  this.roll_two = 0
};

Frame.prototype.calculateScore = function(){
  return this.roll_one + this.roll_two
};
