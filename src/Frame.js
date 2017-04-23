function Frame () {
  this.pins = this.DEFAULTPINS;
  this.rollsLeft = this.DEFAULTROLLS;
  this.firstShot = 0;
  this.score = 0;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype.DEFAULTPINS = 10;
Frame.prototype.DEFAULTROLLS = 2;

Frame.prototype.play = function(score) {
  if(this.rollsLeft === 2 && score === this.pins) {
    this.pins -= score;
    this.score += score;
    this.setStrike();
  } else if(this.rollsLeft === 1 && score === this.pins) {
    this.pins -= score;
    this.score += score;
    this.setSpare();
  } else if(this.rollsLeft === 2 && score !== this.pins) {
    console.log('Score: ' + score + '\n'+ (this.pins - score) + ' pins left.');
    this.firstShot = score;
    this.pins -= score;
    this.score += score;
    this.rollsLeft -= 1;
  } else {
    console.log('Score: ' + score + '\n'+ (this.pins - score) + ' pins left.');
    this.pins -= score;
    this.score += score;
    this.rollsLeft -= 1;
  }
};

Frame.prototype.finalPlay = function(score) {
  if(this.rollsLeft === 3 && score === this.pins) {
    this.score += score;
    this.setFinalStrike();
  } else if(this.rollsLeft === 2 && score === this.pins) {
    this.score += score;
    this.setFinalSpare();
  } else if(this.rollsLeft === 2 && score != this.pins) {
    this.score += score;
    this.pins -= score;
    this.rollsLeft -= 1;
  } else {
    this.score += score;
    this.pins -= score;
    this.rollsLeft -= 1;
  }
};

Frame.prototype.setStrike = function() {
  this.isStrike = true;
  this.rollsLeft = 0;
  console.log('STRIKE!\n No pins left.');
};

Frame.prototype.setFinalStrike = function() {
  this.isStrike = true;
  this.rollsLeft -= 1;
  console.log('Strike!\n Well done!')
}

Frame.prototype.setSpare = function() {
  this.isSpare = true;
  this.rollsLeft = 0;
  console.log('SPARE!\n No pins left.')
};

Frame.prototype.setFinalSpare = function() {
  this.isSpare = true;
  this.rollsLeft -= 1;
  console.log('Boom!')
};
