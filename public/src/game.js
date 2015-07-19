var Game = function(frame) {
  this.bowls = [];
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

  // this.frameScore = [];
  // this.score = 0;
};

Game.prototype.runningTotal = function() {
  var trackBowl = 0
  var total = 0;

  for (var i = 0; i < this.frameList.length; i++) {
    total += this.frameList[i].calculateScore();
    // include some if statements to take into account strikes, spares, bonuese etc.
    trackBowl += this.frameList[i].throwCount;
  }
  return total;
};

Game.prototype.currentFrame = function() {
  if (this.frameList[0].isOver() === false) return this.frameList[0];
  // return this.frameList[0];
  for(var i = 9; i >= 0; i--) {
    if (this.frameList[i].isOver() === true) return this.frameList[i + 1];
  }
  this.frameList[0];
};

Game.prototype.bowl = function(pinsOver) {
  // pinsOver = parseInt(pinsOver)
  this.currentFrame().trackBowl(pinsOver);
  this.bowls.push(pinsOver);
};
