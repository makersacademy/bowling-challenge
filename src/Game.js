function Game() {
  this.frames = []
  this.currentFrame = 1
  // this.currentFrame = this.frames[frame-1]
};

Game.prototype.start = function(length) {
  for(var i=0; i < length; i++){
    this.frames.push(new Frame());
  }
};

Game.prototype.roll = function(pins) {
  if (this.frames[this.currentFrame-1].isRoll===2 && this.currentFrame<10 && (10-this.frames[this.currentFrame-1].bowls[0])<pins) {
    throw 'not enough pins!'
  }
  if (this.frames[this.currentFrame-1].isRoll===3 && this.frames[this.currentFrame-1].bowls[1]!=10 && (10-this.frames[this.currentFrame-1].bowls[0])<pins) {
    throw 'not enough pins on 10th frame!'
  };
  (this.frames[this.currentFrame-1]).enterRoll(pins)
  this.bonusPoints(pins)
  if (this.frames[this.currentFrame-1].bowls[0]===10 && this.currentFrame !=10 || this.frames[this.currentFrame-1].isRoll===2 && this.currentFrame !=10) {
    this.currentFrame += 1
  } else {
    this.frames[this.currentFrame-1].changeRoll()
  }
};

Game.prototype.calculateTotal = function() {
  this.runningTotal = 0
  for(var i in this.frames) {
    if (this.frames[i].total) {
      this.runningTotal += this.frames[i].total;
    }
  }
};

Game.prototype.bonusPoints = function(pins) {
  if (this.currentFrame != 1 && this.frames[this.currentFrame-2].isStrike === true) {
    this.twoStrikesPoints(pins)
    this.oneStrikePoints(pins)
  } else
  if (this.currentFrame != 1 && this.frames[this.currentFrame-2].isSpare === true && this.frames[this.currentFrame-1].isRoll===1) {
    this.frames[this.currentFrame-2].total += pins
  }
};

Game.prototype.oneStrikePoints = function(pins) {
  if (this.frames[this.currentFrame-1].isRoll!=3) {
    this.frames[this.currentFrame-2].total += pins
  }
};

Game.prototype.twoStrikesPoints = function(pins) {
  if (this.currentFrame != 2 && this.frames[this.currentFrame-3].isStrike === true && this.frames[this.currentFrame-1].isRoll===1) {
    this.frames[this.currentFrame-3].total += pins
  }
};
