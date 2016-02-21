function Player()  {
  this.score = 0;
  this.results = [];
  this.PINS_STANDING = 10;
}

Player.prototype.roll1 = function(number) {
  if (number > 10) {
    throw "roll must be a number between 1 and 10";
  }
  else if (number === 10) {
    var pinsDown = number
    this.results.push(pinsDown, 0);
    this.PINS_STANDING = 0;
  }
  else {
    var pinsDown = number
    this.results.push(pinsDown);
    this.PINS_STANDING = (10 - number);
  }
};

Player.prototype.roll2 = function(number) {
  if (number > this.PINS_STANDING){
    throw "oops looks like there aren't that many pins standing, roll " + this.PINS_STANDING + " or below"
  }
  else {
    var pinsDown = number
    this.results.push(pinsDown);
  }
};

Player.prototype.calculateScore = function() {
  this.score = 0;
  var rollIndex = 0;

  for(var frameIndex = 0; frameIndex < 11; frameIndex++) {

    if (this.results[rollIndex] === 10){
      this.score += this.results[rollIndex] + this.results[rollIndex + 1] + this.results[rollIndex + 2] + this.results[rollIndex + 3];
    }
    else if (this.results[rollIndex] + this.results[rollIndex + 1] === 10){
      this.score += this.results[rollIndex] + this.results[rollIndex + 1] + this.results[rollIndex + 2];
    }
    else {
      this.score += this.results[rollIndex] + this.results[rollIndex + 1];
    }
    rollIndex += 2;
  }

  return this.score;

};


// RANDOM ROLL FUNCTIONALITY:
// Player.prototype.roll = function() {
//   var rollOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var pinsDown = rollOptions[Math.floor(Math.random()*rollOptions.length)];
//   this.results.push(pinsDown);
// };
