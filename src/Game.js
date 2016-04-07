function Game(frame) {
  this.frames  = [];
  this.frame = typeof frame !== 'undefined' ? frame : new Frame();
  for (i=0;i<10;i++) {
    this.addFrame();
  };
  this.score = 0
  this.currentFrame = 0
}

Game.prototype.addFrame = function(){
  if (this.frames.length < 10) {
  this.frames.push(new this.frame());
}
}

Game.prototype.roll = function(numberOfPins){
  // if (this.frames[0].firstroll) {
  //   this.frames[0].secondroll = numberOfPins;
  // } else {
  //   this.frames[0].firstroll = numberOfPins;
  // }
  return 3;
}
