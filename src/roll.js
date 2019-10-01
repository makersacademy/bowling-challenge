function Roll() {
  this.pinsDown = 0
};

Roll.prototype.enterPinsDown = function(number) {
  this.pinsDown = number;
};

Roll.prototype.enterRollNumber = function(rollNumber) {
  this.number = rollNumber;
}
