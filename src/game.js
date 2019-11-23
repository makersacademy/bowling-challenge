function Game(){
  this.tenFrames = [];
}


Game.prototype.getTenFrames = function (endFrame) {
  this.tenFrames.push(endFrame);
  return this.tenFrames;
};
