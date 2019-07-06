function Game() {
  this.current_frame = 1;
  this.frames = [];
};

Game.prototype.makeFrames = function(number=10, frameConstructor=Frame) {
  x = 0
  while (x < number) {
    this.frames.push(new frameConstructor);
    x += 1;
  }
};

Game.prototype.inputRoll = function(roll) {
  if (this.validRoll(roll)){
    frame = this.frames[this.current_frame - 1]
    if (frame.calculateWhichRoll() == 1){
      frame.roll_1 = roll;
    } else {
      frame.roll_2 = roll;
      this.current_frame += 1
    }
  } else {
    return 'Error: invalid roll'
  }
};

Game.prototype.validRoll = function(roll) {
  return roll > 0 && roll < 10;
}
