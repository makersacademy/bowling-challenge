function Game() {
  this.frames = []
  // this.currentFrame = this.frames[frame-1]
};

Game.prototype.start = function(length) {
  for(var i=0; i < length; i++){
    this.frames.push(new Frame());
  }
    // this.frames.push(new FinalFrame());
};

Game.prototype.roll = function(frame, pins) {
  if (this.frames[frame-1].isRoll===2 && frame<10 && (10-this.frames[frame-1].bowls[0])<pins) {
    throw 'not enough pins!'
  }
  if (this.frames[frame-1].isRoll===3 && this.frames[frame-1].bowls[1]!=10 && (10-this.frames[frame-1].bowls[0])<pins) {
    throw 'not enough pins!'
  };
  // this.checksPins(frame,pins)
  (this.frames[frame-1]).enterRoll(pins)
  this.bonusPoints(frame,pins)
  this.frames[frame-1].changeRoll();
};

Game.prototype.calculateTotal = function() {
  this.runningTotal = 0
  for(var i in this.frames) {
    if (this.frames[i].total) {
      this.runningTotal += this.frames[i].total;
    }
  }
};

Game.prototype.checksPins = function(frame,pins) {
  if (this.frames[frame-1].isRoll===2 && frame<10 && (10-this.frames[frame-1].bowls[0])<pins) {
    throw 'not enough pins!'
  }
  if (this.frames[frame-1].isRoll===3 && this.frames[frame-1].bowls[1]!=10 && (10-this.frames[frame-1].bowls[0])<pins) {
    throw 'not enough pins!'
  }
};


Game.prototype.bonusPoints = function(frame,pins) {
  if (frame != 1 && this.frames[frame-2].isStrike === true) {
    this.twoStrikesPoints(frame,pins)
    this.oneStrikePoints(frame,pins)
  } else
  if (frame != 1 && this.frames[frame-2].isSpare === true && this.frames[frame-1].isRoll===1) {
    this.frames[frame-2].total += pins
  }
};

Game.prototype.oneStrikePoints = function(frame,pins) {
  if (this.frames[frame-1].isRoll!=3) {
    this.frames[frame-2].total += pins
  }
};

Game.prototype.twoStrikesPoints = function(frame,pins) {
  if (frame != 2 && this.frames[frame-3].isStrike === true && this.frames[frame-1].isRoll===1) {
    this.frames[frame-3].total += pins
  }
};
