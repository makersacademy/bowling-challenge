function Game() {
  this.rolls = [];
  this.frames = [];
  this.pairs = [];
}

Game.prototype._addFrame = function() {
  if (this.frames.length === 20) {
      this.frames.push(10);
  } else if (this.frames.length === 0 || this.frames.length === 1 ) {
    this.frames.push(1);
  } else if (this.frames[this.frames.length-1] !== this.frames[this.frames.length-2]) {
    this.frames.push(this.frames[this.frames.length-1]);
  } else if (this.frames[this.frames.length-1] === this.frames[this.frames.length-2]) {
    this.frames.push(this.frames[this.frames.length-1]+1);
  }
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frames.length-1];
}

Game.prototype.basicScore = function () {
  var counter = 0;
  this.rolls.map(function(roll) {
    if (roll !== null) {
      counter += roll
    }
  })
  return counter;
}

Game.prototype.spares = function() {
  var spares = 0;
  for (i = 0; i < this.pairs.length; i+=2) {
    if ( this.isNotNull(this.pairs[i+1]) ) {
      if (Object.values(this.pairs[i])[0] + Object.values(this.pairs[i+1])[0] === 10) {
        spares += Object.values(this.pairs[i+2])[0];
      }
    }
  }
  return spares;
}

Game.prototype.strikes = function() {
  var strikes = 0;
  for (i = 0; i < this.pairs.length; i++) {
    if (Object.values(this.pairs[i])[0] === 10) {
      // sprawdzic czy te pozniejsze istnieja
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

Game.prototype.isInProgress = function() {
  if ((this.frames.length == 20 && this.frames[this.frames.length-1] !== 10) || (this.frames.length == 20 && (this.rolls[this.rolls.length-1] + this.rolls[this.rolls.length-2]) !== 10)) {
    return false;
  } else {
    return true;
  }
}

Game.prototype.generalScore = function() {
  var whole = 0
  whole += this.basicScore();
  whole += this.spares();
  whole += this.strikes();
  return whole
}

Game.prototype.isNotNull = function(stuff) {
  if (Object.values(stuff).length !== 0) {
    return true;
  } else {
    return false;
  }
}
