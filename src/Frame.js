var Frame = function() {
  this.rolls = []
  this.score = 0
  this.bonus = 0
}

Frame.prototype.record = function(roll1, roll2){
  this.rolls = [roll1, roll2]
}

Frame.prototype.calculateScore = function() {
  this.score = this.rolls[0] + this.rolls[1]
}
