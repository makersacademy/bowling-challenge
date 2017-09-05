function Role () {
  this.points = undefined;
};

Role.prototype.addPoints = function (points) {
  if (this.isCorrectPointInput(points)) {
    this.points = points;
  } else {
    this.points = undefined;
    alert("please enter correct points")
    // raise error
  }
};

Role.prototype.isCorrectPointInput = function (points) {
  if (points >= 0 && points < 11 ) {
    return true
  } else {
    return false
  };
};
