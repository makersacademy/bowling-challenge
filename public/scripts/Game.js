function Game() {
  this.roll = 0;
  this.frame = 0;
  this.frames = []
  for(var i = 0; i < 11; i++) {
    this.frames.push(new Frame());
  }
}

Game.prototype.getScore = function() {
  var total = 0;
  for(var i = 0; i < this.frames.length; i++) {
    var currentFrameTotal = this.frames[i].getTotal();
    total += currentFrameTotal;
    var nextFrame = this.frames[i+1];
    if (i === 9) { continue; }
    if (this.frames[i].isSpare()) {
      total += nextFrame.getFirstRoll();
    } else if (this.frames[i].isStrike()) {
      total += nextFrame.getTotal();
    }
  }
  return total;
};

Game.prototype.rollBall = function(numberOfPins) {
  var currentFrame = this.frames[this.frame];
  currentFrame.rollBall(numberOfPins);
  this.countRoll();
  if (currentFrame.isStrike()) {
    this.countRoll();
  }
};

Game.prototype.countRoll = function() {
  this.roll += 1;
  if (this.roll % 2 === 0) {
    this.incrementFrame();
  }
}

Game.prototype.getRollCount = function() {
  return this.roll;
};

Game.prototype.getFrameCount = function() {
  return this.frame;
};

Game.prototype.incrementFrame = function() {
  this.frame += 1;
};
