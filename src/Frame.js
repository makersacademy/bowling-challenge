function Frame() {
  this.totPins = 10;
}

Frame.prototype.countPins = function(number) {
  if (number < 0 || number > this.totPins) {
    throw new Error("Please enter a number between 0 and " + this.totPins);
  }
  console.log(number);
  this.totPins -= number;
  number;
};
