function Player() {
  this.scoresheet = 0;
  this.pinCount = 10;
}

Player.prototype.throwBall = function() {
  var firstShot = this.throwGenerator();
  if (firstShot == 0) {
    console.log('Miss!');
  } else if (firstShot > 0) {
    this.pinCount = this.pinCount - firstShot
    console.log('You hit ' + firstShot + ' pins!');
  }

};

Player.prototype.throwGenerator = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};
