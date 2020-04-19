Scorecard = function() {
  this.bowlOne = [];
  this.bowlTwo = [];
  this.bowlThree = [];

};

var userFirstbowl = []

Scorecard.prototype.firstBowl = function(num) {
  this.bowlOne.push(num);
  return this.bowlOne
}

//make a variable for thermostat called power saving mode
//set that to false
