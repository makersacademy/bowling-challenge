function Frame(first_roll, second_roll) {
  this.first_roll = first_roll;
  this.second_roll = second_roll;
}

Frame.prototype.isStrike = function() {
  if (this.first_roll == 10) return(true);
  else return(false);
}

Frame.prototype.isSpare = function() {
  if (this.first_roll + this.second_roll == 10) return(true);
  else return(false)
}
