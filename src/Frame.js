function Frame(firstRoll, secondRoll) {

  this.rolls = [firstRoll, secondRoll];
  this.score = 0;
  this.isAStrike = false;
  this.isASpare = false;
  this.isAnOpenFrame = false;
  
  this.scoreFrame();
}

Frame.prototype.scoreFrame = function() {
  this.score += this.rolls[0];
  this.score += this.rolls[1];

  if(this.rolls[0] == 10) {
    this.isAStrike = true;
  } else if (this.score == 10) {
    this.isASpare = true;
  } else {
    this.isAnOpenFrame = true;
  }
}