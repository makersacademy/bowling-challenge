//
//
// function Frame() {
//   this.rolls = [];
//   this.maxRolls = 2;
//   this.points = 0;
//   this.pins = 10;
//   this.isActive = true;
// };
//
// Frame.prototype.enterRoll = function (roll) {
//   if (this.rolls.length < 2) {
//    this.rolls.push(roll)
//  }
//  this.isActive = !this.isActive;
// };
//
// Frame.prototype.reset = function () {
//   this.points = 0;
// };
//
// Frame.prototype.isStrike = function () {
//   this.isActive = !this.isActive;
//   this.points += 10;
// };
//
// Frame.prototype.isSpare = function () {
//   this.points += 5;
// };
