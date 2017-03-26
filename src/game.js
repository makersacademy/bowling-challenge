function Game(){
  this.frames = []
}

Game.prototype.advance = function(){
  frame = new Frame
  frame.start()
  if (frame.outcome[0] <= 9) {
    frame.second()
    this.frames.push(frame.outcome)
  }
  else {
    this.frames.push(frame.outcome)
  }
}

Game.prototype.play = function(){
  while (this.frames.length < 10){
    this.advance()
  }
}

Game.prototype.scoring = function(){
  
}
