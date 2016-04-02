function Game() {
  this.score = 0;
  this.rollInFrame = 1;
  this.isStrike = false;
  this.frameScore = 0;
  this.frames = [];
}

Game.prototype.rollBall = function (pins) {
  this.frameScore += pins;
    }
  if (this.rollInFrame === 1) {
    this.rollInFrame = 2;
  }  
  else {
    this.frames.push(this.frameScore);
    this.frameScore = 0;
    this.rollInFrame = 1;
  }
  }
}


Game.prototype.calculateScore = function() {
  this.score = this.frames.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
}
