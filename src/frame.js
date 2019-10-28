function Frame() {
  this.score = 0
  this.rolls = []
  this.bonus = null
}

Frame.prototype.roll = function(pins) {
  if (this.rolls.length === 0) {
    this.saveRoll(pins);
    this.saveScore(pins);
    if (pins === 10) {
      this.bonus = 'strike'
    }
   } else { 
      this.saveRoll(pins);
      this.saveScore(pins);
      this.isSpare();
    }
  }

Frame.prototype.saveRoll = function(pins) {
  this.rolls.push(pins);
}

Frame.prototype.saveScore = function(pins) {
  this.score += pins
}

Frame.prototype.isSpare = function() {
  this.score === 10 ? this.bonus = 'spare' : null
}