function ScoreCard() {
  this.total = 0;
}

ScoreCard.prototype.roll = function(number) {
  if(this.integerCheck(number)) {
    throw new Error("Please enter a number between 0 and 10");
  }
  this.total += number;
};

ScoreCard.prototype.integerCheck = function(number) {
  return (isNaN(number) || number < 0 || number > 10);
}
