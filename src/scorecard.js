// the following code is for one frame in a scorecard...
Scorecard = function() {
  this.bowlOne = [];
  this.bowlTwo = [];
  this.frameTotal = [];
};

Scorecard.prototype.firstBowl = function(num) {
  this.bowlOne.push(num);
}

Scorecard.prototype.secondBowl = function(num) {
  this.bowlTwo.push(num);
}

Scorecard.prototype.roundSummary = function() {
  this.frameTotal.push(this.bowlOne[0] + this.bowlTwo[0]);
}

Scorecard.prototype.printFrameScore = function() {
  return this.frameTotal
}



//make a variable for thermostat called power saving mode
//set that to false
