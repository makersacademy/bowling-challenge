var BowlingGame = function () {
  this.runningTotal = 0
  this.frameCount = 0
};

BowlingGame.prototype.startFrame = function() {
  first = this.roll();
  if (first < 10)
    return ('You knocked down ' + first + ' pins. You can roll again!')
  else {
    this.runningTotal = this.runningTotal + 10
    this.frameCount++
    return 'You got a STRIKE!'
  };
};

BowlingGame.prototype.roll = function() {
  var pinsHit = Math.floor(Math.random()*11);
  return pinsHit
};


BowlingGame.prototype.rollAgain = function(firstRoll) {
  var secondRoll = Math.floor(Math.random()*(11 - firstRoll));
  var total = firstRoll + secondRoll;
  this.runningTotal = this.runningTotal + total
  this.frameCount++
  if (total == 10)
    return 'Your first roll knocked down ' + firstRoll + ' pins. Your second roll knocked down ' + secondRoll + ' pins. You got a SPARE!'
  else
    return 'Your first roll knocked down ' + firstRoll + ' pins. Your second roll knocked down ' + secondRoll + ' pins. Your total is ' + total + '!'
};

BowlingGame.prototype.end = function() {

};
