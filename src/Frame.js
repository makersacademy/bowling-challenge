var Frame = function() {
  this.rolls = []
  this.score = 0
  this.bonus = []
  this.strike = false
  this.spare = false
}

Frame.prototype.record = function(roll1, roll2) {
  roll2 = typeof roll2 !== undefined ? roll2 : 0;
  this.rolls = [roll1, roll2]
  this.calculateScore();
  if(this.score === 10) {
    this.checkIfSpareOrStrike();
  }
}

Frame.prototype.checkIfSpareOrStrike = function() {
  if(this.rolls[0] === 10) {
    this.strike = true;
  } else {
    this.spare = true;
  }
};

Frame.prototype.calculateScore = function() {
  this.score = this.rolls.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });

  if(this.bonus.length > 0) {
  this.score += this.bonus.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    });
  }
}

Frame.prototype.addThirdRoll = function(roll3) {
  this.rolls.push(roll3);
  this.calculateScore();
}

Frame.prototype.addBonus = function(bonus1, bonus2) {
  this.bonus.push(bonus1)
  if (bonus2 !== undefined) {
    this.bonus.push(bonus2)
  }
  this.calculateScore();
}
