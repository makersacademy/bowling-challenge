function Score() {
  this.result = [];
  this.runningTotals = [];
}

Score.prototype.giveScore = function(completedRounds) {
  for(var i = 0; i < completedRounds.length; i++) {
    this.result.push(completedRounds[i][0] + completedRounds[i][1]);
  }
  this._returnRunningTotal(this.result);
  return this.runningTotals;
};

Score.prototype._returnRunningTotal = function(inputArray) {
  var sum = 0;
  for(var i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
    this.runningTotals.push(sum);
  }
  return this.runningTotals;
};
