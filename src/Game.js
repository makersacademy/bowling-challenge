function Game() {
  "use strict";
  this.ball = 1
  this.pinsStanding = 10;
  this.scores = [];
  this.bonus = 0;
  this.frameScores = [];
  this.calcScore = 0;
}

Game.prototype.countRemainingPins = function(pins) {
    this.pinsStanding -= pins;
};

Game.prototype.resetPins = function() {
  this.pinsStanding = 10
}

Game.prototype.updateFrame = function() {
  if ((this.ball === 1) && (this.pinsStanding !== 0)) {
    this.ball = 2;
  } else {
    this.ball = 1;
    this.resetPins();
  }
};

Game.prototype.bowl = function(pins) {
  this.countRemainingPins(pins);
  this.addScore(pins);
  this.updateFrame();
};

Game.prototype.addScore = function(pins) {
  if ((this.ball === 1) && (this.pinsStanding === 0)) {
    pins = 'X';
  } 
  if ((this.ball === 2) && (this.pinsStanding === 0)) {
    pins = '/';
  }
  this.scores.push(pins);  
};

Game.prototype.totalFirstFrame = function() {
  for (var i = 0; i < 2; i++) {
    if (this.scores[i] === 'X') {
      return (this.frameScores.push((10 + this.addBonus(2, i))));
    } 
    if (this.scores[i] === '/') {
      return (this.frameScores.push((10 + this.addBonus(1, i))));
    } 
  }
  if (this.frameScores.length === 0) {
      this.frameScores.push((this.scores[0]) + (this.scores[1]));
  }
};

Game.prototype.numerical = function(toNumerical) {
  if ((toNumerical === 'X') || (toNumerical === '/')) {
    return 10;
  } else {
    return toNumerical;
  }
};

Game.prototype.addBonus = function(numberOfBonusBowls, ballNumber) {
  var x = ballNumber
  for (var i = 0; i < numberOfBonusBowls; i++) {
    this.bonus += ((this.numerical(this.scores[x+1])));
    x++
  }
  return this.bonus
};

Game.prototype.finalScore = function() {
  for (var i = 0; i <= (this.scores.length -1); i++) {
    this.calcScore += this.scores[i];
  }
  return this.calcScore;
};