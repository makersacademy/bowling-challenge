function Game() {
  "use strict";
  this.ball = 1
  this.pinsStanding = 10;
  this.scores = [];
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

Game.prototype.finalScore = function() {
  for (var i = 0; i <= (this.scores.length -1); i++) {
    this.calcScore += this.scores[i];
  }
  return this.calcScore;
};