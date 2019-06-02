function Frame() {
  this.rolls = [];
  this.maxRolls = 2;
  this.points = 0;
  this.pins = 10;
  this.isActive = true;
};

Frame.prototype.reset = function () {
  this.points = 0;
};

Frame.prototype.isStrike = function () {
  this.isActive = !this.isActive;
  this.points += 10;
};


Frame.prototype.calculatePoints = function (rollOne, rollTwo) {
  if (rollOne + rollTwo < 10 ) {
   this.points += (rollOne + rollTwo);
} else {
   return "Strike or Spare...";
}
};
