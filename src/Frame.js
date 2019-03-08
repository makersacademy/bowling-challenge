function Frame(firstRoll, secondRoll) {

  this.rolls = [firstRoll, secondRoll];
  this.score = 0;
  this.isAStrike = false;
  this.isASpare = false;
  this.isAnOpenFrame = false;

  this.scoreFrame();
}

Frame.prototype.scoreFrame = function() {
  for(var roll = 0; roll < this.rolls.length; roll++) { 
    this.score += this.rolls[roll];
  }

  if(this.rolls[0] == 10) {
    this.isAStrike = true;
  } else if (this.score == 10) {
    this.isASpare = true;
  } else {
    this.isAnOpenFrame = true;
  }
}

Frame.prototype.addBonusRoll = function(rollScore) {
  this.rolls.push(rollScore);
}