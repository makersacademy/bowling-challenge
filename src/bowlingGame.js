function BowlingGame() {

  this.STRIKE = 10;
  this.SPARE = 10;
  this.PINS = 10;
  this.MAXFRAMES = 10;

  this._score = 0;
  this._frame = 1;
  this._bowlsRemaining  = 2;
  this._bonusBalls = 0;
  this._pinsKnockedDown = 0;
  this._pinsStanding = 10;
}

BowlingGame.prototype.newGame = function() {
  this._score = 0;
  this._frame = 1;
  this._bowlsRemaining = 2;
  this._bonusBalls = 0;
  this._pinsKnockedDown = 0;
  this._pinsStanding = 10;
}

BowlingGame.prototype.bowl = function() {
  if (this.isLastFrame()) {
    this.playLastFrame();
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
  this._pinsKnockedDown = this.generateRandomPins();
  this._pinsStanding -= this._pinsKnockedDown;
  this._bowlsRemaining -= 1;

  if (this.isStrike()) {
    this.addStrikeToScore();
    this._bowlsRemaining = 0;
  } else if (this.isSpare()) {
    this.addSpareToScore();
  } else {
    this.addRegularBowlToScore();
  }
};

BowlingGame.prototype.playLastFrame = function() {
  this._pinsKnockedDown = this.generateRandomPins();
  this._pinsStanding -= this._pinsKnockedDown;
  this._bowlsRemaining -= 1;

  if (this.isStrike()) {
    this.addStrikeToScore();
    this._bowlsRemaining = 2
  } else if (this.isSpare()) {
    this.addSpareToScore();
  } else {
    this.addRegularBowlToScore();
  }
};

BowlingGame.prototype.addRegularBowlToScore = function()  {
  if (this._bonusBalls > 0) {
    this._score += this._pinsKnockedDown;
    this._bonusBalls -= 1;
  }
  this._score += this._pinsKnockedDown;
};

BowlingGame.prototype.addStrikeToScore = function()  {
  if (this._bonusBalls > 0) {
    this._score += this._pinsKnockedDown;
    this._bonusBalls -= 1;
    console.log('add bonus')
  }
  this._score += this._pinsKnockedDown;
  this._bonusBalls += 2;
};

BowlingGame.prototype.addSpareToScore = function()  {
  if (this._bonusBalls > 0) {
    this._score += this._pinsKnockedDown;
    this._bonusBalls -= 1;
  }
  this._score += this._pinsKnockedDown;
  this._bonusBalls += 1;
};

BowlingGame.prototype.isStrike = function() {
  return ( (this._pinsKnockedDown === this.STRIKE) &&
           (this._pinsStanding === 0) &&
           (this._bowlsRemaining === 1));
};

BowlingGame.prototype.isSpare = function() {
  return ((this._pinsStanding === 0) && (this._bowlsRemaining === 0));
};

BowlingGame.prototype.nextFrame = function() {
  this._frame += 1;
  this._bowlsRemaining = 2;
  this._pinsKnockedDown = 0;
  this._pinsStanding = 10
};

BowlingGame.prototype.isEndOfFrame = function() {
  return (this._bowlsRemaining === 0);
};

BowlingGame.prototype.isLastFrame = function() {
  return (this._frame === this.MAXFRAMES)
};

BowlingGame.prototype.isEndOfGame = function() {
  return (this.isLastFrame() && (this._bowlsRemaining === 0))
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

BowlingGame.prototype.getPinsKnockedDown = function() {
  return this._pinsKnockedDown;
};

BowlingGame.prototype.getPinsStanding = function() {
  return this._pinsStanding;
};

BowlingGame.prototype.finishGame = function() {
  // disable bowl button
  // display Game Over
};

BowlingGame.prototype.generateRandomPins = function() {
  return Math.floor(Math.random() * (this._pinsStanding + 1));
};