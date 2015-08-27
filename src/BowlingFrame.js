var BowlingFrame = function(number) {

  this.number = number;
  this.totalFrame = {};
  this.totalFrame[this.number] = [0,0];
  this.rollIndex = 0;

};

BowlingFrame.prototype.rollOne = function(input) {
  if (input > 10 || input < 0) {
    throw new Error("Roll must be between 0 and 10");
  } else {
    number = this.number;
    rollIndex = this.rollIndex;
    this.totalFrame[number][rollIndex] = input;
    return this.totalFrame;
  };
};

BowlingFrame.prototype.rollTwo = function(input) {
  number = this.number;
  rollIndex = 1;
  if (this.totalFrame[number][0] === 10) {
    throw new Error("You got a strike in this frame, well done!");
  } else if (input > 10 - this.totalFrame[number][0] || input < 0) {
    throw new Error("Roll must be between 0 and " + (10 - this.totalFrame[number][0]));
  } else {
    this.totalFrame[number][rollIndex] = input;
    return this.totalFrame;
  };
};

BowlingFrame.prototype.submitFrame = function() {
  number = this.number;
  console.log(this.totalFrame[number]);
  game.newGame[number] = this.totalFrame[number];
};
