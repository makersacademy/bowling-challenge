function Game(){
  this.frames = [];
}

Game.prototype.addFrame = function (firstroll, secondroll) {
  if (this.frames.length < 9 ) {
    frame = new Frame();
    frame.update(firstroll, secondroll);
    this.frames.push(frame);
}
};
