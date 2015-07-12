var BowlingGame = function () {};

BowlingGame.prototype.startGame = function() {
  first = this.roll();
  if (first < 10) {
    return ('You knocked down ' + first + ' pins. You can roll again!')
  } else {
    return 'STRIKE!'
  };
};

BowlingGame.prototype.roll = function() {
  var pinsHit = Math.floor(Math.random()*11);
  return pinsHit
};


BowlingGame.prototype.rollAgain = function(firstRoll) {
  var total = firstRoll + Math.floor(Math.random()*(11 - firstRoll));
  return total
};
