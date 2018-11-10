function Game() {
  this.rolls = [];
  this.currentFrame = 1;
  this.bowlNumber = 1
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
// if you are not in 10th frame and you score either a strike or it is your
// second roll, reset the bowl number to 1
  if (this.currentFrame != 10) {
    if ((pins === 10 && this.bowlNumber === 1) || (this.bowlNumber === 2)) {
      this.currentFrame += 1
      this.bowlNumber = 1
    } else {
      this.bowlNumber += 1
    }
  } else {
    this.bowlNumber += 1
  }
}

Game.prototype.totalScore = function() {
  var total = 0
  var rollNum = this.rolls.length
  if (this.isBonusFrame()) {
    rollNum -= 2;
  }
  for (var i = 0; i < rollNum; i++) {
    if (this.isStrike(i)) {
      total += (this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2]);
    } else if (this.isSpare(i)) {
      total += (this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2]);
      i++
    } else {
      total += this.rolls[i];
    }
  }
  return total
}

Game.prototype.isSpare = function(index) {
  if (this.rolls[index] + this.rolls[index + 1] === 10) {
    return true
  } else {
    return false
  }
}

Game.prototype.isStrike = function(index) {
  if (this.rolls[index] === 10) {
    return true
  } else {
    return false
  }
}

Game.prototype.isBonusFrame = function() {
  var rollNum = this.rolls.length - 2
  if (this.currentFrame === 10) {
    if (this.isStrike(rollNum) || this.isSpare(rollNum)) {
    return true
    };
  }
  return false;
};
