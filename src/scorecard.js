// the following code is for one frame in a scorecard...
Scorecard = function() {
  this.bowlOne = [];
  this.bowlTwo = [];
  this.frameTotal = [];
};

Scorecard.prototype.firstBowl = function(num) {
  this.bowlOne.push(num);
  return this.bowlOne
}

Scorecard.prototype.secondBowl = function(num) {
  this.bowlTwo.push(num);
  return this.bowlTwo
}

Scorecard.prototype.roundSummary = function() {
  if (this.bowlOne == 10) {
  }


  this.frameTotal.push(this.bowlOne[0] + this.bowlTwo[0]);
  return this.frameTotal
}


//make a variable for thermostat called power saving mode
//set that to false
