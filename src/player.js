function Player() {
  this.scoresheet = 0;
  this.pinCount = 10;
}

Player.prototype.takeTurn = function() {
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

};

Player.prototype.throwBall = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};
