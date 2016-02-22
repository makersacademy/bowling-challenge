function Frame() {
  this.rolls = [];
  this.rollsLimit = 2;
  this.bonus = null;
}

Frame.prototype.addRoll = function (pinsKnocked) {
  if (this.rolls.length >= this.rollsLimit) {
    throw new Error("You have reached the limit of rolls for this frame");
  } else if (this.rolls[0] + pinsKnocked > 10) {
    throw new Error("Erorr: There are only 10 pins in a frame");
  } else if (pinsKnocked > 10) {
    throw new Error("Erorr: There are only 10 pins in a frame");
  }
   this.rolls.push(pinsKnocked);
};

Frame.prototype.isSpare = function () {
  if (this.rolls[0] + this.rolls[1] === 10) {
    return true;
  }
  return false;
};

Frame.prototype.isStrike = function () {
  if (this.rolls[0] === 10) {
    return true;
  }
  return false;
};

Frame.prototype.score = function () {
  var total = 0;
  for (var i in this.rolls) { total += this.rolls[i]; }
  return total;
};
