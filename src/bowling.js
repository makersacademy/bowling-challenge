function Bowling(game, score) {
  this._pins = 10;
  this._firstThrow = null;
  this._secondThrow = null;
  this._strikeRound = false;
  this._spareRound = false;
  this.game = game;
  this.score = score;
};

Bowling.prototype.throw = function() {
  if (this.game.status == 'ended'){
    throw "The game has ended";
  }
  else if (this.game.currentThrow === 'first') {
    this.firstRoll();
  } else {
      this.secondRoll();
    }
};

Bowling.prototype.firstRoll = function () {
  this.ballThrown();
  if(this._firstThrow === 10) {
    this._Strike();
  } else {
    this.moveToSecondRoll();
  }
};

Bowling.prototype.ballThrown = function () {
  this._firstThrow = this._hook();

};

Bowling.prototype.moveToSecondRoll = function() {
  if (this._spareRound) {
    this.game.scoreCard[this.game.currentFrame-2].push(this.score.framePoints+this._firstThrow)
  }
  this.game.currentThrow = 'second';
  this.game.scoreCard[this.game.currentFrame-1].push(this._firstThrow);
}

Bowling.prototype.secondRoll = function () {
  this.throwSecondBall();
  if(this._firstThrow+this._secondThrow === 10) {
    this.spare();
  } else {
    this.moveToFirstRoll();
  }
};

Bowling.prototype.throwSecondBall = function () {
  this._secondThrow = this._hook();
  this.game.scoreCard[this.game.currentFrame-1].push(this._secondThrow);
  // this._strikeRound = false;
};

Bowling.prototype.spare = function () {
  this._spareRound = true;
  this.score.framePoints += (this._firstThrow  +  this._secondThrow);
  this.game.nextTurn();
};

Bowling.prototype.moveToFirstRoll = function() {
  this.score.framePoints += (this._firstThrow  +  this._secondThrow);
  this.game.scoreCard[this.game.currentFrame-1].push(this.score.framePoints)
  this.game.nextTurn();
}

Bowling.prototype.strike = function () {
  this.game.nextTurn();
  this.game.scoreCard.push(this._firstThrow);
  this.game.scoreCard.push('-');
  this._strikeRound = true;
};

Bowling.prototype._hook = function () {
  return Math.floor(Math.random()*(this._pins-this._firstThrow+1));
}
