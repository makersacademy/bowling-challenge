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
}

Frame.prototype.addThirdRoll = function(roll3) {
  this.rolls.push(roll3);
  this.calculateScore();
}
