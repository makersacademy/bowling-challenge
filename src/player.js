function Player() {
  this.scoresheet = 0;
}

Player.prototype.throwBall = function() {
  var firstShot = this.throwGenerator();
  if (firstShot == 0) {
    throw 'Miss!';
  } else if (firstShot > 0) {
    throw 'You hit ' + firstShot + ' pins!';
  }
};

Player.prototype.throwGenerator = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};
