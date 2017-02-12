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
  if (this.frame.isSpare()) {
    console.log("Spare!");
    // this.bonusSpare();
    // this.bonusStrike();
    this.frames.push(this.frame);
    this.framesCounter();
  }
  else if (this.frame.isStrike()) {
    console.log("Strike!");
    // this.bonusSpare();
    // this.bonusStrike();
    this.frames.push(this.frame);
    this.framesCounter();
  }
  else if (this.frame.rolls.length == 2) {
    // this.bonusSpare();
    // this.bonusStrike();
    this.frames.push(this.frame);
    this.framesCounter();
  }
};

Game.prototype.bonusSpare = function() {
  if (this.frames.pop() && this.frames.pop().isSpare()) {
    this.totScore += this.frame.rolls[0].score;
    console.log("+ " + this.frame.rolls[0].score + " Bonus Spare!");
  }
};

Game.prototype.bonusStrike = function() {
  if (this.frames.pop() && this.frames.pop().isStrike()) {
    this.totScore += this.frame.score;
    console.log("+ " + this.frame.score + " Bonus Strike!");
  }
};
