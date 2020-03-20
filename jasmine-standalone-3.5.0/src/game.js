function bowlingGame() {
  this.maximumScore = 10;
  this.rolls = []
}

bowlingGame.prototype.roll = function(num) {
  this.rolls.push(num)
}

bowlingGame.prototype.score = function() {
  let score = 0
  for(let roll = 0; roll < 20; roll++) { score += this.rolls[roll]}
  return score
}