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
    counter += roll
  })
  return counter;
}

Game.prototype.spares = function() {
  var spares = 0;
  for (i = 0; i < this.pairs.length; i+=2) {
    if ((parseInt(Object.values(this.pairs[i])) + parseInt(Object.values(this.pairs[i+1]))) === 10) {
      spares += parseInt(Object.values(this.pairs[i+2]));
    }
  }
  return spares;
}

Game.prototype.strikes = function() {
  var strikes = 0;
  for (i = 0; i < this.pairs.length; i++) {
    if (parseInt(Object.values(this.pairs[i])) === 10) {
      strikes += parseInt(Object.values(this.pairs[i+1]));
      strikes += parseInt(Object.values(this.pairs[i+2]));
    }
  }
  return strikes;
}

Game.prototype.isInProgress = function() {
  if (this.frames[this.frames.length-1] === 10 && this.frames[this.frames.length-2] === 10 && this.frames[this.frames.length-3] === 10 ) {
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
