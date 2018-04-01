function Game(bonus) {
  this.bonus = bonus
  this.total = 0
  this.frame = 1
}

Game.prototype.roll = function(first, second = 0, third = 0) {
  this.edgeCase(first, second, third)
  if (this.frame === 10 && third != 0) {
    var score = this.tenthScore(first, second, third)
    var bonus = 0
  } else {
    var score = this.score(first, second)
    var bonus = this.bonusScore(first, second) }
  this.frame += 1
  this.total += (score + bonus)
  this.bonus.calculate(first, second)
  return `Frame: ${this.frame - 1} | Score: ${score} | Bonus Score: ${bonus} | Total: ${this.total}`
}

Game.prototype.score = function(first, second = 0) {
  return first + second
}

Game.prototype.bonusScore = function(first, second = 0) {
  return (first * this.bonus.firstBonus) + (second * this.bonus.secondBonus)
}

Game.prototype.edgeCase = function(first, second=0, third=0) {
  if (this.frame > 10) {throw new Error('You have already had 10 frames');}
  if (this.frame != 10 && third != 0) {throw new Error('You cannot have 3 balls');}
  if (first + second < 10 && third != 0) {throw new Error('You cannot have 3 balls');}
  if (first + second > 10 && first != 10) {throw new Error('You can only knock over 10 pins');}
  if (this.frame === 10 && third === 0) {throw new Error('You should use all 3 balls');}
}

Game.prototype.tenthScore = function(first, second, third) {
  if (first === 10) {
    return ((this.score(first)) + (this.bonusScore(first)) + (this.score(second, third)))
  } else {
    return ((this.score(first, second)) + (this.bonusScore(first, second)) + (this.score(third)))
  }
}
