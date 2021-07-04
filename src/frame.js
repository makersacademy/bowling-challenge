function Frame(){
  this.totalFrame = 10;
  this.MIMUMUM_FRAME = 1
};

Frame.prototype.getCurrentFrame = function() {
  return this.totalFrame;
};

Frame.prototype.down = function() {
  if(this.isMinimumFrame()) {
    return;
  }
  this.totalFrame -= 1;
};

Frame.prototype.isMinimumFrame = function () {
  return this.totalFrame === this.MIMUMUM_FRAME;

};
