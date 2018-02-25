function Game() {
  this.rolls = [];
  this.frames = [];
  this.pairs = [];
}

Game.prototype.isInProgress = function() {
  if (this._lessThan20() || this._endGameStrike() ||  this._endGameSpare()) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._addFrame = function() {
  let framesNum = this.frames.length;
  if (framesNum === 20) { //edge case - 10th bonus round
      this.frames.push(10);
  } else if (framesNum === 0 || framesNum === 1 ) {
    this.frames.push(1);
  } else if (this.frames[framesNum-1] !== this.frames[framesNum-2]) {
    this.frames.push(this.frames[framesNum-1]);
  } else if (this.frames[framesNum-1] === this.frames[framesNum-2]) {
    this.frames.push(this.frames[framesNum-1]+1);
  }
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frames.length-1];
}

Game.prototype.basicScore = function () {
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
  for (i = 0; i < 17; i+=2) {
    if ( this.isNotNull(this.pairs[i+1]) ) {
      if (Object.values(this.pairs[i])[0] + Object.values(this.pairs[i+1])[0] === 10) {
        spares += Object.values(this.pairs[i+2])[0];
      }
    }
  }
  if (Object.values(this.pairs[18])[0] + Object.values(this.pairs[19])[0] === 10) {
    spares += Object.values(this.pairs[20])[0];
  }
  return spares;
}

Game.prototype.strikes = function() {
  var strikes = 0;
  for (i = 0; i <= 19; i++) {
    if (Object.values(this.pairs[i])[0] === 10) {
      if (Object.values(this.pairs[i+2])[0] !== 10) {
      strikes += Object.values(this.pairs[i+2])[0];
      strikes += Object.values(this.pairs[i+3])[0];
      } else {
      strikes += Object.values(this.pairs[i+2])[0];
      strikes += Object.values(this.pairs[i+4])[0];
      }
    }
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

Game.prototype.isNotNull = function(stuff) {
  if (Object.values(stuff)[0] !== undefined) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._lessThan20 = function() {
  if (this.frames.length < 20) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._endGameStrike = function() {
  if (this.frames.length === 20 && (this.rolls[this.rolls.length-1]) === 10) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._endGameSpare = function() {
  if (this.frames.length === 20 && (this.rolls[this.rolls.length-1] + this.rolls[this.rolls.length-2]) === 10) {
    return true;
  } else {
    return false;
  }
}

Game.prototype._lastPairValue = function() {

}
