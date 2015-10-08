function Player() {
  this.scoresheet = 0;
  this.pinCount = 10;
  this.frameCount = 0;
}

Player.prototype.takeTurn = function() {
  this.frameCount += 1;
  this.pinCount = 10;
  var firstShot = this.throwBall();
  if (firstShot == 10) {
    this.pinCount = 0;
    throw('STRIKE!');
  } else if (firstShot == 0) {
    console.log('Miss!');
  } else if (firstShot > 0) {
    this.pinCount = this.pinCount - firstShot;
    console.log('You hit ' + firstShot + ' pins!');
  }

  var secondShot = this.throwBall();
  if (secondShot == 10) {
    this.pinCount = 0;
    throw('HALF STRIKE!');
  } else if (secondShot == 0) {
    console.log('Miss!');
  } else if (secondShot > 0) {
    this.pinCount = this.pinCount - secondShot;
    console.log('You hit ' + secondShot + ' pins on your second throw!');
  }

};

Player.prototype.throwBall = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};
