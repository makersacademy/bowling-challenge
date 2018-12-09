function Frame(){
  this.rolls = [0, 0];
  this.MAX_ROLL = 10;
  this.score = 0;
}

Frame.prototype.getRoll = function(number) {
  return this.rolls[number - 1];
};

Frame.prototype.update = function(firstroll, secondroll) {
  this.rolls[0] = firstroll;
  this.rolls[1] = secondroll;
};

Frame.prototype.getAllRolls = function () {
  return this.rolls;
};

Frame.prototype._rollSum = function () {
  return this.rolls.reduce(function (total, roll) {
    return total + roll;
  });
};

Frame.prototype._isStrike = function () {
  return this.rolls[0] == this.MAX_ROLL;
};

Frame.prototype.calcBonus = function (nextFrame, frameAfterNext) {
  if (nextFrame == undefined) {
      return 0;
  }
    else if (this._isStrike()) {
      if (nextFrame._isStrike()) {
        return this.calcStrikeBonus(nextFrame) + nextFrame.calcSpareBonus(frameAfterNext);
      } else {
        return this.calcStrikeBonus(nextFrame);
      }
  } else if (this._isSpare()) {
      return this.calcSpareBonus(nextFrame);
  } else { return 0; }
};

Frame.prototype._isSpare = function () {
  if (this.rolls[2] == undefined) {
      return this.rolls[0] < this.MAX_ROLL && this._rollSum() == this.MAX_ROLL;
  } else {
      return this.rolls[0] < this.MAX_ROLL && (this._rollSum() - this.rolls[2]) == this.MAX_ROLL;
  }
};

Frame.prototype.calcStrikeBonus = function (nextFrame) {
  return nextFrame._rollSum();
};

Frame.prototype.calcSpareBonus = function (nextFrame) {
    return nextFrame.getRoll(1);
};

Frame.prototype.calcScore = function (nextFrame, frameAfterNext) {
  if (nextFrame == undefined) {
      this.score = this._rollSum() + this.calcBonus();
  } else {
      this.score =  this._rollSum() + this.calcBonus(nextFrame, frameAfterNext);
  }
  return this.score;
};
