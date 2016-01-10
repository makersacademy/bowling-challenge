function Bonus (timeLimit) {
  this.timeLimit = timeLimit;
}

Bonus.prototype.reduceTimeLimit = function () {
  this.timeLimit--;
};
