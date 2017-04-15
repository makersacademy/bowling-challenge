function Frame () {
  this.pins = this.DEFAULTPINS;
  this.rollsLeft = this.DEFAULTROLLS;
  this.score = 0;
};

Frame.prototype.DEFAULTPINS = 10;
Frame.prototype.DEFAULTROLLS = 2;

Frame.prototype.rollScore = function() {
  return Math.floor(Math.random() * this.pins) + 0;
};

Frame.prototype.play = function() {
  if(this.rollsLeft === 0) {
    throw 'No more frames. Start a new frame!';
  } else {
    var score = this.rollScore();
    this.pins -= score;
    this.score += score;
    this.rollsLeft -= 1;
  }
};
