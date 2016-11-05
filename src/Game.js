function Game() {
  this._frames = [];
  this.MAX_FRAMES = 10;
}

Game.prototype.score = function() {
  this._score = 0;
  for(var i=0; i<this.frames().length; i++) {
    this._score += this.frames()[i].total();
  }
  return this._score;
};

Game.prototype.addFrame = function(frame) {
  if(this.frames().length < this.MAX_FRAMES) {
    this._frames.push(frame);
  }
};

Game.prototype.currentFrame = function() {
  return this._frames[this._frames.length - 1];
};

Game.prototype.previousFrame = function() {
  return this._frames[this._frames.length - 2];
};

Game.prototype.beforePreviousFrame = function() {
  return this._frames[this._frames.length - 3];
};

Game.prototype.frames = function() {
  return this._frames.slice(0);
};

Game.prototype.roll = function(n) {
  if(this.hasntStarted() || this.currentFrame().isComplete()) {
    var frame = new Frame();
    this.addFrame(frame);
  }
  if(this.afterStrike() || this.afterSpare()) {
    this.previousFrame().addValue(n);
    if(this._isDouble) {
      this.beforePreviousFrame().addValue(n);
    }
  }
  this.currentFrame().addRoll(n);

  if(this.afterStrike()) {
    this._isDouble = this.currentFrame().isStrike() === true;
  }
}

Game.prototype.afterSpare = function() {
  if(this.previousFrame() !== undefined) {
    return this.previousFrame().isSpare() && this.currentFrame().hasNoRolls()
  }
};

Game.prototype.afterStrike = function() {
  return (this.previousFrame() !== undefined) && this.previousFrame().isStrike()
}

Game.prototype.isComplete = function() {
  return this.frames().length === 10 && this.currentFrame().isComplete();
}

Game.prototype.hasntStarted = function() {
  return this.currentFrame() === undefined
}

Game.prototype.randomRoll = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Game.prototype.autoRoll = function() {
  var roll;
  if(this.hasntStarted() || this.currentFrame().isComplete()) {
    var chance_of_strike = Math.random() > 0.7;
    if(chance_of_strike) {
      roll = 10;
    } else {
      roll = this.randomRoll(0, 10);
    }
  } else {
    roll = this.randomRoll(0, 10-this.currentFrame().roll1());
  }
  this.roll(roll);
};
