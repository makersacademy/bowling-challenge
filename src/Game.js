function Game() {
  this.totScore = 0;
  this.maxFrames = 10;
  this.frames = [];
  this.framesCounter();
}

Game.prototype.newFrame = function () {
  this.frame = new Frame();
};

Game.prototype.framesCounter = function () {
  if(this.maxFrames-- > 0) {
    this.newFrame();
    console.log("New frame");
  }
  else {
    console.log("Well Played! This is your Final Score: " + this.totScore);
    throw new Error("Game Over");
  }
};

Game.prototype.pinsKnockedDown = function(number) {
  this.frame.countPins(number);
  this.totScore += number;
  console.log(this.totScore);
  if (this.frame.isStrike()) {
    this.frames.push(this.frame);
    this.framesCounter();
  } else if (this.frame.rolls.length == 2) {
    this.frames.push(this.frame);
    this.framesCounter();
  }
};
