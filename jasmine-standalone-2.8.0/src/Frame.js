function Frame() {
  this.frameScore = [];
}

Frame.prototype.addBowl = function(bowl) {
  if(bowl.pinsBowled == 10) {
    this.frameScore.push(bowl);
    var emptyFill = new Bowl;
    emptyFill.roll(0);
    this.frameScore.push(emptyFill);
  }
  else {
    this.frameScore.push(bowl);
  }
}

Frame.prototype.isStrike = function() {
  return this.frameScore[0].pinsBowled == 10;
}

Frame.prototype.isSpare = function() {
  if(!this.isStrike()) {
    return this.frameScore[0].pinsBowled + this.frameScore[1].pinsBowled == 10;
  }
}

Frame.prototype.nonSpecial = function() {
  return this.isSpare() == false;
}
