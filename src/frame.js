function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.remainingPins = 10;
  this.score = 0;
  this.showScore = true;
  this.complete = false;
  this.bowls = [];
  this.bowlsToDouble = 0;
};

Frame.prototype.bowl = function(x) {
  console.log("bowling is called on frame " + this.frameNumber)

  this.remainingPins -= x;
  this.bowls.push(x);
  this.score += x
  console.log("I'm adding a " + x + " to the score")

  if (this.numberOfBowls() == 2 || this.remainingPins == 0) {
    this.complete = true;
  }
  if (this.remainingPins == 0) {
    this.bowlsToDouble = 3 - this.numberOfBowls()
    console.log("bowls to double = "+this.bowlsToDouble)
  }
  console.log("At the end of the frames bowl method, number of bowls is " + this.numberOfBowls())
}

Frame.prototype.numberOfBowls = function() {
  return this.bowls.length;
}
