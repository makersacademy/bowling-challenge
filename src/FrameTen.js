function FrameTen(number, firstRoll) {
  this._number = number;
  this._firstRoll = firstRoll;
  this._secondRoll = null;
  this._thirdRoll = null;
  this._bonus = 0;
}

FrameTen.prototype = Object.create(Frame.prototype);

FrameTen.prototype.addRoll = function(rollValue) {
  if (this._secondRoll === null) {
    this._secondRoll = rollValue;
  } else if ((this.isStrike() || this.isSpare()) && this._thirdRoll === null) {
    this._thirdRoll = rollValue;
  }
}

// .number = function() {
//   return this._number;
// }
//
FrameTen.prototype.total = function() {
  return this._firstRoll + this._secondRoll + this._thirdRoll;
}
//
// Frame.prototype.addRoll = function(second_roll) {
//   this._secondRoll = second_roll;
// }
//
// Frame.prototype.addBonus = function(bonus) {
//   this._bonus = bonus;
// }
//
FrameTen.prototype.isOngoing = function() {
  console.log(this)
  if (this._secondRoll === null) {
    console.log(this)
    return true;
  } else {
    if (this._thirdRoll === null) {
      if (this.isStrike() || this.isSpare()) {
        console.log(this);
        return true;
      }
    } else {
      return false;
    }
  }
  // if (this._firstRoll !== 10) {
  //   if (this._secondRoll === null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else if (this._thirdRoll === null) {
  //   return true;
  // } else {
  //   return false
  // }
}
//
// Frame.prototype.isStrike = function() {
//   return this._firstRoll === 10;
// }
//
// Frame.prototype.isSpare = function() {
//   return !this.isStrike() && this._firstRoll + this._secondRoll === 10;
// }
