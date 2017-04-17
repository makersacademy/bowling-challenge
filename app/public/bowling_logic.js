var BowlingGame = function () {
  this.runningTotal = 0
  this.frameCount = 0
  this.isEnded = false
};

BowlingGame.prototype.startFrame = function() {
  firstRoll = this.roll();
  if (firstRoll < 10)
    return ('You knocked down ' + firstRoll + ' pins. You can roll again.')
  else {
    this.runningTotal += 10
    this.frameCount++
    return 'STRIKE!'
  };
};

BowlingGame.prototype.roll = function() {
  var pinsHit = Math.floor(Math.random()*11);
  return pinsHit
};


BowlingGame.prototype.rollAgain = function(firstRoll) {
  var secondRoll = Math.floor(Math.random()*(11 - firstRoll));
  total = firstRoll + secondRoll;
  this.runningTotal += total
  this.frameCount++
  this.end();
  if (total == 10)
    return 'Your first roll knocked down ' + firstRoll + ' pins. Your second roll knocked down ' + secondRoll + ' pins. SPARE!'
  else
    return 'Your first roll knocked down ' + firstRoll + ' pins. Your second roll knocked down ' + secondRoll + ' pins. Your total is ' + total + '!'
};

BowlingGame.prototype.end = function() {
  if (this.frameCount >= 10)
    this.isEnded = true
  else
    this.isEnded = false
};
