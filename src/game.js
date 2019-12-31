let Game = function() {
  this.rolls = []
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins)
}



Game.prototype.score = function() {
  let result = 0;
for(let i = 0; i < 20; i++) {
  result += this.rolls[i]
}
return result
}