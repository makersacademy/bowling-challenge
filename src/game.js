function Game(){
  this.score = new Score();
}

Game.prototype.recordFrame = function(roll1, roll2, roll3){
  if(this.isOver()){ throw "Game finished" }
  frame = new Frame();
  if(this.score.getFrames().length === 9){ frame.setFinalFrame(); }
  frame.setRoll(1, roll1);
  frame.setRoll(2, roll2);
  if(roll3){ frame.setRoll(3, roll3); };
  this.score.addFrame(frame);
}

Game.prototype.reset = function(){
  this.score = new Score();
}

Game.prototype.isOver = function(){
  if(this.score.frames.length === 10){ return true; };
  return false;
}
