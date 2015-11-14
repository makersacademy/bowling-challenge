function BowlingGame() {
  this._maxFrames = 10;
  this._strike = 10;
  this._spare = 10;
  this._score = 0;
  this._frame = 0;
  this._bowlsRemaining  = 0;
  this._bonusBalls = 0;
  this._pinsStanding = 0;
}

BowlingGame.prototype.newGame = function() {
  this._score = 0;
  this._frame = 1;
  this._bowlsRemaining = 2;
  this._bonusBalls = 0;
  this._pinsStanding = 10;
}

BowlingGame.prototype.bowl = function() {
  if (this.isLastFrame()) {
    // this.playLastFrame();
  } else {
    this.playRegularFrame();
  }

  if (this.isEndOfGame()) {
    this.finishGame();
  } else if (this.isEndOfFrame()) {
    this.nextFrame();
  }
};

BowlingGame.prototype.playRegularFrame = function() {
  if (this.isStrike()) {
    this.addStrikeToScore();
  } else if (this.isSpare()) {
    this.addSpareToScore();
  } else {
    this.addRegularBowlToScore();
  }
};

BowlingGame.prototype.addRegularBowlToScore = function(pinsKnockedDown)  {
  if (this.bonusBalls > 0) {
    this.score += pinsKnockedDown;
    this.bonusBalls -= 1;
  }
  this.score += pinsKnockedDown;
  this.bowlsRemaining -= 1;
};

BowlingGame.prototype.addStrikeToScore = function()  {
  if (this.bonusBalls > 0) {
    this.score += this._strike;
    this.bonusBalls -= 1;
  }
  this.score += this._strike;
  this.bowlsRemaining = 0
};

BowlingGame.prototype.addSpareToScore = function()  {
  if (this.bonusBalls > 0) {
    this.score += this._spare;
    this.bonusBalls -= 1;
  }
  this.score += this._spare;
  this.bowlsRemaining = 0;
};

BowlingGame.prototype.isStrike = function() {
  return ((this._pinsStanding === 0) && (this.bowlsRemaining === 1));
};

BowlingGame.prototype.isSpare = function() {
  return ((this._pinsStanding === 0) && (this.bowlsRemaining === 0));
};

BowlingGame.prototype.nextFrame = function() {
  this.frame += 1;
  this.bowlsRemaining = 2;
};

BowlingGame.prototype.isEndofFrame = function() {
  return (this.bowlsRemaining === 0);
};

BowlingGame.prototype.isLastFrame = function() {
  return (this._frame === this._maxFrame)
};

BowlingGame.prototype.isEndOfGame = function() {
  return (this.isLastGame() && (this._bowlsRemaining === 0))
};

BowlingGame.prototype.getScore = function() {
  return this._score;
};

BowlingGame.prototype.getFrame = function() {
  return this._frame;
};

BowlingGame.prototype.getBowlsRemaining = function() {
  return this._bowlsRemaining;
};

BowlingGame.prototype.getBonusBalls = function() {
  return this._bonusBalls;
};

BowlingGame.prototype.getPinsStanding = function() {
  return this._pinsStanding;
};

BowlingGame.prototype.finishGame = function() {
  // disable bowl button
  // display Game Over
};