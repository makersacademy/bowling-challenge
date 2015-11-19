function BowlingGame(scoreSheet) {
  this.MAXFRAMES = 10;
  this.MAXBOWLSBOWLED = 23

  this.newGame(scoreSheet);
}

BowlingGame.prototype.newGame = function(scoreSheet) {
  this._score = 0;
  this._frame = 1;
  this._bowlsRemaining = 2;
  this._bowlsBowled = 0;
  this._bowlsBowledTotal = 0;
  this._bonuses = [];
  this._pinsKnockedDown = 0;
  this._pinsStanding = 10;
  this._scoreSheet = typeof scoreSheet !== 'undefined' ? scoreSheet : new ScoreSheet();

  this.initBonuses();
}

BowlingGame.prototype.bowl = function() {
  this._pinsKnockedDown = this.generateRandomPins();
  this._pinsStanding -= this._pinsKnockedDown;
  this._bowlsRemaining -= 1;
  this._bowlsBowled += 1;
  this._bowlsBowledTotal += 1;

  this._score += this._pinsKnockedDown * (this.getBonus(this._bowlsBowledTotal) +1);

  if (this.isLastFrame()) {
    this.addLastFrameBonus();
  } else {
    this.addRegularFrameBonus();
  }

  this._scoreSheet.update(this._frame, this._bowlsBowled,
                            this._pinsKnockedDown, this._score);

  if ( (this.isEndOfFrame()) && (!this.isEndOfGame()) ) {
    this.nextFrame();
  }
};

BowlingGame.prototype.addRegularFrameBonus = function() {
  if (this.isStrike()) {
    this.addStrikeBonus();
    this._bowlsRemaining = 0;
  } else if (this.isSpare()) {
    this.addSpareBonus();
  }
};

BowlingGame.prototype.addLastFrameBonus = function() {
  if ((this._bowlsBowled === 1) && (this._pinsStanding === 0)) {
    // strike add two extra bowls
    this._bowlsRemaining = 2;
  } else if ((this._bowlsBowled === 2) && (this._pinsStanding === 0)) {
    // strike or a spare add one extra bowl
    this._bowlsRemaining = 1;
  }
};

BowlingGame.prototype.addStrikeBonus = function()  {
  this.setBonus(this._bowlsBowledTotal+1);
  this.setBonus(this._bowlsBowledTotal + 2);
};

BowlingGame.prototype.addSpareBonus = function()  {
  this.setBonus(this._bowlsBowledTotal+1);
};

BowlingGame.prototype.isStrike = function() {
  return ( (this._pinsStanding === 0) &&
           (this._bowlsBowled === 1));
};

BowlingGame.prototype.isSpare = function() {
  return ( (this._pinsStanding === 0) &&
            (this._bowlsBowled === 2));
};

BowlingGame.prototype.nextFrame = function() {
  this._frame += 1;
  this._bowlsRemaining = 2;
  this._bowlsBowled = 0;
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

BowlingGame.prototype.generateRandomPins = function() {
  return Math.floor(Math.random() * (this._pinsStanding + 1));
};

BowlingGame.prototype.initBonuses = function() {
  for (var i = 0; i < this.MAXBOWLSBOWLED; i++) {
    this._bonuses[i] = 0;
  }
}

BowlingGame.prototype.setBonus = function(bowl) {
  this._bonuses[(bowl - 1)] += 1;
}

BowlingGame.prototype.getBonus = function(bowl) {
  return this._bonuses[(bowl - 1)];
}

