function Game() {
  this.score = 0;
  this.frames = [];
  this.frameScore = 0;
  this.isStrike = false;
  this.rollInFrame = 1;
}

Game.prototype.rollBall = function(pins) {
  if (this.rollInFrame === 1 && pins === 10) {
    this.isStrike = true;
    this.updateFrame();
  }
  else {

    this.frameScore += pins;
    this.nextRoll()
  }
}

Game.prototype.nextRoll = function() {
  if (this.rollInFrame === 1) {
    this.rollInFrame = 2;
  }
  else {
    this.rollInFrame = 1;
    this.updateFrame();
  }
}

Game.prototype.updateFrame = function() {
  this.frames.push(this.frameScore);
  this.frameScore = 0;
}

Game.prototype.calculateScore = function() {
  this.score = this.frames.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
}

