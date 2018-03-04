function Game() {
  this.frames = [];
  this.pairs = [];
}

 // GENERAL METHODS

Game.prototype.isInProgress = function() {
  return (this._endGameStrike() || this._endGameSpare() || this._lessThan20());
}

Game.prototype._lastFrame = function() {
  return this.frames[this.frames.length - 1];
}

Game.prototype._secondLastFrame = function() {
  return this.frames[this.frames.length - 2];
}

Game.prototype._numberOfPairs = function() {
  return this.pairs.length;
}

Game.prototype._valueOfPair = function(i) {
  return Object.values(this.pairs[i])[0];
}

// ADD FRAME

Game.prototype._addFrame = function() {
  let framesCount = this.frames.length;
  let lastFrame = this._lastFrame();
  let secondLastFrame = this._secondLastFrame();

  if (framesCount === 0 || framesCount === 1) {
    this.frames.push(1);
  } else if (lastFrame !== secondLastFrame) {
    this.frames.push(lastFrame);
  } else if (lastFrame === secondLastFrame) {
    if (lastFrame === 10) {
      this.frames.push(10);
    } else {
      this.frames.push(lastFrame + 1);
    }
  }

}

// COUNTING METHODS

Game.prototype.basicScore = function() {
  var counter = 0;
  this.pairs.map(function(pair) {
    if (Object.values(pair)[0] !== undefined) {
      counter += Object.values(pair)[0]
    }
  })
  return counter;
}

Game.prototype.spares = function() {
  var spares = 0;
  for (i = 0; i < 17; i += 2) {
    if (!this.isStrike(this._valueOfPair(i))) { // if strike - cannot be spare
      if (this._valueOfPair(i) + this._valueOfPair(i + 1) === 10) {
        spares += this._valueOfPair(i + 2);
      }
    }
  }
  if (this._valueOfPair(18) + this._valueOfPair(19) === 10) {
    spares += this._valueOfPair(20)
  }
  return spares;
}

Game.prototype.strikes = function() {
  var strikes = 0;
  for (i = 0; i <= 14; i += 2) {
    if (this._valueOfPair(i) === 10) {
      if (this._valueOfPair(i + 2) !== 10) {
        strikes += this._valueOfPair(i + 2);
        strikes += this._valueOfPair(i + 3);
      } else {
        strikes += this._valueOfPair(i + 2);
        strikes += this._valueOfPair(i + 4);
      }
    }
  }
  if (this._valueOfPair(16) === 10) {
    strikes += this._valueOfPair(18);
    strikes += this._valueOfPair(19);
  }
  return strikes;
}

Game.prototype.generalScore = function() {
  var whole = 0
  whole += this.basicScore();
  whole += this.spares();
  whole += this.strikes();
  return whole
}

Game.prototype.isStrike = function(number) {
  if ((this.frames.length %2 !== 0) && number === 10) {
    return true;
  } else {
    return false;
  }
}

// GAME IN PROGRESS METHODS BELOW

Game.prototype._lessThan20 = function() {
  return this.frames.length < 20
}

Game.prototype._endGameStrike = function() {
  if (this.frames.length === 20 && this._secondLastPairValue() === 10) {
    return true;
  } else if (this.frames.length === 22 && this._lastPairValue() === 10) {
    return true;
  } else if (this.frames.length === 22 && this._lastPairValue() === 10) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._endGameSpare = function() {
  if (this.frames.length === 20 && (this._lastPairValue() + this._secondLastPairValue()) === 10) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._lastPairValue = function() {
  return Object.values(this.pairs[this.pairs.length - 1])[0];
}

Game.prototype._secondLastPairValue = function() {
  return Object.values(this.pairs[this.pairs.length - 2])[0];
}
