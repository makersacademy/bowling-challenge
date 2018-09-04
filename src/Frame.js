function Frame(firstRoll, secondRoll, thirdRoll = null) {
  this.firstRoll = firstRoll;
  this.secondRoll = secondRoll;
  if(thirdRoll != null) this.thirdRoll = thirdRoll;
}

Frame.prototype.isStrike = function() {
  if (this.firstRoll == 10) return(true);
  else return(false);
}

Frame.prototype.isSpare = function() {
  if (this.firstRoll + this.secondRoll == 10) return(true);
  else return(false)
}
