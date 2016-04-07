function Game(frame) {
  this.frames  = []
  this.frame = typeof frame !== 'undefined' ? frame : new Frame();
}

Game.prototype.addFrame = function(){
  if (this.frames.length < 10) {
  this.frames.push(new this.frame());
}
}

Game.prototype.roll = function(numberOfPins){
  if (this.frames[0].firstroll) {
    this.frames[0].secondroll = numberOfPins;
  } else {
    this.frames[0].firstroll = numberOfPins;
  }
}
