function Game(){
  this.frames = []
};

Game.prototype.addFrame = function(frame){
  this.frames.push(frame)
};

Game.prototype.roll = function(roll_one, roll_two){
  frame = new Frame();
  frame.roll_one = roll_one;
  frame.roll_two = roll_two;
  this.addFrame(frame)
}
