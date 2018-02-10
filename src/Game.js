function Game() {
  this.frames = []
};

Game.prototype.start = function(length) {
  for(var i=0; i < length; i++){
    this.frames.push(new Frame());
  }
};

Game.prototype.roll = function(frame, roll, pins) {
  (this.frames[frame-1]).enterRoll(pins)
  if (frame != 1 && this.frames[frame-2].isStrike === true) {
    this.secondStrikePoints(frame,roll,pins)
    if (roll!=3) {
      this.frames[frame-2].total += pins
    }
  } else if (frame != 1 && this.frames[frame-2].isSpare === true && roll === 1) {
    this.frames[frame-2].total += pins
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

Game.prototype.secondStrikePoints = function(frame,roll,pins){
  if (frame != 2 && this.frames[frame-3].isStrike === true && roll === 1) {
    this.frames[frame-3].total += pins
  }
};
