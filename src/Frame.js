var Frame = function() {
  this.rolls = []
  this.score = 0
  this.bonus = 0
}

Frame.prototype.record = function(roll1, roll2) {
  this.rolls = [roll1, roll2]
  this.calculateScore();
}

Frame.prototype.calculateScore = function() {
  this.score = this.rolls.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });
  this.score += this.bonus
}

Frame.prototype.addThirdRoll = function(roll3) {
  this.rolls.push(roll3);
  this.calculateScore();
}

Frame.prototype.addBonus = function(bonus1, bonus2) {
  bonus2 = typeof bonus2 !== 'undefined' ? bonus2 : 0;
  this.bonus += bonus1 + bonus2
  this.calculateScore();
}
