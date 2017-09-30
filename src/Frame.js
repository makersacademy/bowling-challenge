function Frame() {
  this.rolls = [];
  this.bonus = 0;
  this.bonusRollsRemaining = 0;
}

Frame.prototype.score = function () {
  var roll_1 = this.rolls[0] ? this.rolls[0] : 0;
  var roll_2 = this.rolls[1] ? this.rolls[1] : 0;
  return roll_1 + roll_2 + this.bonus;
};

Frame.prototype.roll = function (pins) {
  if (this.isFinished()) {
    throw new Error('Illegal roll, frame complete');
  } else {
    this.rolls.push(pins);
    this.addBonusRolls();
  }
};

Frame.prototype.addBonusRolls = function () {
  if(!this.isFinished()){
    return;
  } else {
    if (this.isStrike()) {
      this.bonusRollsRemaining += 2;
    } else if (this.isSpare()) {
      this.bonusRollsRemaining +=1;
    }
  }
};

Frame.prototype.getBonusRollsRemaining = function () {
  return this.bonusRollsRemaining;
};

Frame.prototype.isStrike = function () {
  return this.rolls[0] === 10;
};

Frame.prototype.isSpare = function () {
  if (!this.isFinished()) {
    return false;
  } else if (this.rolls[0] + this.rolls[1] === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isFinished = function () {
  if (this.rolls.length === 2) {
    return true;
  } else if (this.rolls[0] === 10) {
    return true;
  } else {
    return false;
  }
};
