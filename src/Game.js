function Game(frameConstructor) {
  this.frames  = [];
  this.frame = typeof frameConstructor === 'undefined' ? new Frame() : frameConstructor;
  this.score = 0
  this.currentFrame = 0
}

Game.prototype.start = function() {
  for (i=0;i<10;i++) {
    this.addFrame(this.frame);
  };
}

Game.prototype.addFrame = function(frame){
  if (this.frames.length < 10) {
  this.frames.push(frame);
}
}

Game.prototype.roll = function(numberOfPins){
  this.frames[this.currentFrame].saveRoll()
}

Game.prototype.calculate = function(){
  var sum = 0;
  this.frames.forEach(function(frame){
    if frame.isComplete(){
    sum += frame.firstroll()
    sum += frame.secondroll()
  }
  })
  return sum
}
