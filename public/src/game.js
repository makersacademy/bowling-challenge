var Game = function(frame) {
  this.throwList = [];
  this.frameList = [
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(true),
  ];
};

Game.prototype.runningTotal = function() {
  var trackThrow = 0;
  var total = 0;

  for (var i = 0; i < this.frameList.length; i++) {
    total += this.frameList[i].calculateScore();
    // include some logic to calculate strikes, spares, bonuese etc.
    // if (this.frameList[i].addBonus() === true) total += ..........
    // if (this.frameList[i].isStrike() === true) total += .........
    trackThrow += this.frameList[i].throwCount;
  }
  return total;
};

Game.prototype.currentFrame = function() {
  if (this.frameList[0].isOver() === false) return this.frameList[0];
  for(var i = 9; i >= 0; i--) {
    if (this.frameList[i].isOver() === true) return this.frameList[i + 1];
  }
  this.frameList[0];
};

Game.prototype.throwBall = function(pinsOver) {
  this.currentFrame().trackThrow(pinsOver);
  this.throwList.push(pinsOver);
};
