function Bonus (timeLimit) {
  this.timeLimit = timeLimit;
}

Bonus.prototype.reduceTimeLimit = function () {
  this.timeLimit--;
};

Bonus.prototype.loopLimit = function (first_argument) {
  if (this.timeLimit > 0) {return 1;}
  return 0;
};
