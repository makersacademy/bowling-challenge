function Frame () {
  this.pins = this.DEFAULTPINS;
  this.rollsLeft = this.DEFAULTROLLS;
};

Frame.prototype.DEFAULTPINS = 10;
Frame.prototype.DEFAULTROLLS = 2;

Frame.prototype.rollScore = function() {
  return Math.floor(Math.random() * this.DEFAULTPINS) + 0;
};

Frame.prototype.play = function() {
  this.pins -= this.rollScore();

};
