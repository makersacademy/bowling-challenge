function Frame() {
  this.roll_1 = 'nil';
  this.roll_2 = 'nil';
  this.score = 'nil';
};


Frame.prototype.calculateWhichRoll = function() {
  if(this.roll_1 == 'nil'){
    return 1;
  } else {
    return 2;
  }
};

Frame.prototype.addRolls = function() {
  return this.roll_1 + this.roll_2;
};

Frame.prototype.validRolls = function() {
  return this.addRolls() <= 10
};

Frame.prototype.setRollTotal = function() {
  if (this.validRolls()){
    return this.score = this.addRolls()
  } else {
    return 'Error: combined rolls are greater than number of pins'
  }
};
