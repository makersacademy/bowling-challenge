function Ball() {
}

Ball.prototype.roll = function () {
  return Math.floor((Math.random() * 11));
};
