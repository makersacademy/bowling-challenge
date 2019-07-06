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
