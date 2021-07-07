function Frame() {
  this.rolls = [];
  this.maxPins = 10;
  this.frameOver = false;

  this.addRoll = function(num) {
    if (num > this.maxPins) {
      throw new Error("Invalid input");
      return;
    }
    if (this.isStrike(num)) {
      this.rolls.push(num);
    } else {
      this.rolls.push(num);
    }
  }

  this.isStrike = function(num) {
    if (this.rolls.length === 0 && num === this.maxPins) {
      this.frameOver = true;
      return true;
    }
    return false;
  }

  this.isSpare = function() {
    if (this.rolls.length === 2) {
      let total = this.rolls[0] + this.rolls[1];
      if (total === this.maxPins) {
        this.frameOver = true;
        return true;
      }
    }
    return false;
  }
}
