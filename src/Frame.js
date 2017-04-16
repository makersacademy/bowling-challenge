function Frame () {
  this.pins = this.DEFAULTPINS;
  this.rollsLeft = this.DEFAULTROLLS;
  this.score = 0;
  this.isStrike = false;
}

Frame.prototype.DEFAULTPINS = 10;
Frame.prototype.DEFAULTROLLS = 2;

Frame.prototype.rollScore = function() {
  return Math.floor(Math.random() * this.pins) + 0;
};

Frame.prototype.play = function() {
  var score = this.rollScore();
  if(this.rollsLeft === 2 && score === this.pins) {
    this.pins -= score;
    this.score += score;
    this.setStrike();
  } else if(this.rollsLeft === 1 && score === this.pins) {
    this.pins -= score;
    this.score += score;
    this.setSpare();
  } else {
    console.log('Score: ' + score + '\n'+ (this.pins - score) + ' pins left.');
    this.pins -= score;
    this.score += score;
    this.rollsLeft -= 1;
  }
};

Frame.prototype.setStrike = function() {
  this.isStrike = true;
  this.rollsLeft = 0;
  console.log('STRIKE!\n No pins left.');
};

Frame.prototype.setSpare = function() {
  this.isSpare = true;
  this.rollsLeft = 0;
  console.log('SPARE!\n No pins left.')
};
