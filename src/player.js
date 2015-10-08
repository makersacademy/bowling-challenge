function Player() {
  this.score = 0;
  this.scoreSheet = 0;
  this.pinCount = 10;
  this.frameCount = 0;
  this.strike = false;
  this.halfStrike = false;
}

Player.prototype.takeTurn = function() {
  this.frameCount += 1;
  this.pinCount = 10;
  var firstShot = this.throwBall();
  this.score = this.score + firstShot; // this might need editing
  if (firstShot == 10) {
    this.pinCount = 0;
    throw('STRIKE!');
  } else if (firstShot == 0) {
    console.log('Your first throw didn\'t hit anything!');
  } else if (firstShot > 0) {
    this.pinCount = this.pinCount - firstShot;
    console.log('You hit ' + firstShot + ' pins on your first throw!');
  }

  var secondShot = this.throwBall();
  if (this.score + secondShot > 10) {
    this.score = 10;
  } else if (this.score + secondShot < 10) {
    this.score = this.score + secondShot;
  }

  if (this.pinCount - secondShot <= 0) {
    this.pinCount = 0;
    throw('HALF STRIKE!');
  } else if (secondShot == 0) {
    console.log('MISS!! You didn\'t hit a thing!');
  } else if (secondShot > 0) {
    this.pinCount = this.pinCount - secondShot;
    console.log('You hit ' + secondShot + ' pins on your second throw!');
  }

};

Player.prototype.throwBall = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};
