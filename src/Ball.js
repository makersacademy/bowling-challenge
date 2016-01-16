function Ball() {
}

Ball.prototype.roll = function (pinsLeft) {
  return Math.floor((Math.random() * (pinsLeft+1)));
};
