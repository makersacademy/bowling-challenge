var Frame = function(roll1, roll2){
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.score = roll1.output()[0] + roll2.output()[0];
  this.checkForSpare();
};
Frame.prototype.checkForSpare = function() {
  if(this.score == 10){
    this.spare = true
  } else {
    this.spare = false
  }
};
