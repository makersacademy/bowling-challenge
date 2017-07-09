function Frame() {
  this.firstRoll = 0
  this.secondRoll = 0
}

Frame.prototype.rollOne = function(number) {
  this.firstRoll += number;
};

Frame.prototype.rollTwo = function(number) {
  this.secondRoll += number;
};
