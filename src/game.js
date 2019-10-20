function Game() {

  this.rolls = []
  this.currentRoll = 0
  
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
  this.currentRoll ++;
}

Game.prototype.calculateScore = function() {
  var score = 0;
  var currentBowl = 0;
  this.scorecardFiller();
  for (var frame = 0; frame < 10; frame ++) {
    if (this.isStrike(currentBowl)) {
      score += this.strikeBonus(currentBowl);
      currentBowl ++;
    } else if (this.isSpare(currentBowl)) {
      score += this.spareBonus(currentBowl);
      currentBowl += 2;
    } else {
    score += this.basicFrame(currentBowl);
    currentBowl += 2;
  }
}
  return score
}

Game.prototype.basicFrame = function(currentBowl) {
  return this.rolls[currentBowl] + this.rolls[currentBowl+1];
}

Game.prototype.isSpare = function(currentBowl) {
  return (this.rolls[currentBowl] + this.rolls[currentBowl+1] === 10)
}

Game.prototype.isStrike = function (currentBowl) {
  return (this.rolls[currentBowl] === 10)
}

Game.prototype.strikeBonus = function(currentBowl) {
  return 10 + this.rolls[currentBowl+1] + this.rolls[currentBowl+2]
}

Game.prototype.spareBonus = function(currentBowl) {
  return 10 + this.rolls[currentBowl+2]
}

Game.prototype.multiRoll = function(rolls, pins) {
  for (var i = 0; i < rolls; i++) {
    this.roll(pins);
  };
}

Game.prototype.scorecardFiller = function() {
  this.multiRoll(21,0)
}