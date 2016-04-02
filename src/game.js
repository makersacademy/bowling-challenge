function Game() {
  this.score = 0;
  this.frames = [];
  this.frameScore = 0;
  this.isStrike = false;
  this.rollInFrame = 1;
}

Game.prototype.rollBall = function(pins) {
  this.frameScore += pins;
  if (this.rollInFrame === 1 && pins === 10) {
    this.isStrike = true;
    this.updateFrame();
  }
  else {
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
  this.frames.push('1');
  this.frameScore = 0;
  this.frame +=1;
}

Game.prototype.calculateScore = function() {
  this.frames.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
}

