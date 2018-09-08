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
  if ((!this.isStrike()) && (this.firstRoll + this.secondRoll == 10)) return(true);
  else return(false);
}

Frame.prototype.isNormal = function() {
  if (!this.isStrike() && !this.isSpare()) return true;
  else return(false);
}

Frame.prototype.frameScore = function() {
  if (this.thirdRoll != null) return (this.firstRoll + this.secondRoll +  this.thirdRoll);
  else return (this.firstRoll + this.secondRoll);
}
