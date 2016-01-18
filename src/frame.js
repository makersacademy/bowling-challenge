function Frame(pinsHit, pinsLeft, frameScore) {
  this.pinsHit = pinsHit || 0;
  this.MAX_PINS = 10;
  this.pinsLeft = pinsLeft || this.MAX_PINS;
  this.isStrike = false;
  this.frameScore = frameScore || 0;
  this.scoreBonus = 0;
  this.isSpare = false;
}

Frame.prototype.getHit = function(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

Frame.prototype.firstRoll = function() {
  this.pinsHit = this.getHit(0,this.MAX_PINS);
  this.pinsLeft -= this.pinsHit;
  this.frameScore +=this.pinsHit;
  if (this.pinsHit === 10) {
    this.isStrike = true;
    this.scoreBonus +=this.pinsHit;
    this.resetFrame();
    console.log('Strike!');
  } else {
    console.log('Not bad, you knocked ' + this.pinsHit +
    ' pins, try harder this time...');
  }
};

Frame.prototype.secondRoll = function() {
  this.pinsHit = this.getHit(0, this.pinsLeft);
  this.pinsLeft -= this.pinsHit;
  this.frameScore +=this.pinsHit;
  if (this.pinsLeft === 0) {
    this.isSpare = true;
  }
  if (this.pinsHit === 10) {
    this.isStrike = true;
    this.scoreBonus +=this.pinsHit;
    this.resetFrame();
    console.log('Strike!');
  } else {
    console.log('Not bad, you knocked ' + this.pinsHit +
    ' pins, try harder this time...');
  }
};

Frame.prototype.resetFrame = function() {
  this.pinsHit =  0;
  this.pinsLeft = this.MAX_PINS;
  this.frameScore = 0;


};
