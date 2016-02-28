function Frame() {
  this.rolls = [];
  this.rollsLimit = 2;
  this.bonus = null;
  this.score = 0;
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
      this.bonus = "spare";
  } else {
    this.bonus = null;
 }
};

Frame.prototype.isStrike = function () {
  if (this.rolls[0] === 10) {
     this.bonus = "strike";
     return this.bonus;
  } else {
   this.bonus = null;
   return this.bonus;
 }
};

Frame.prototype.calcScore = function () {
  var total = 0;
  for (var i in this.rolls) { total += this.rolls[i]; }
  this.score = total;
};
