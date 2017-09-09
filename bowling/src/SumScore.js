function SumScore() {
  this.nextBonus = 0;
}

SumScore.prototype.setBonus = function(bonus) {
  this.nextBonus = bonus;
}

SumScore.prototype.addScore = function(scoreArray) {
  if ( this.nextBonus == 0 ) { return scoreArray[0] + scoreArray[1] }
  if ( this.nextBonus == 1 ) { return scoreArray[0] * 2 + scoreArray[1] }
  if ( this.nextBonus == 2 ) { return scoreArray[0] * 2 + scoreArray[1] * 2 }
}
