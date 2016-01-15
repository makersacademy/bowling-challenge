function Score() {
  this.result = [];
}
 // this works, but doesn't give a cumulative total yet
Score.prototype.giveScore = function(completedRounds) {
  for(var i = 0; i < completedRounds.length; i++) {
    this.result.push(completedRounds[i].rollOne + completedRounds[i].rollTwo);
  }
  return this.result;
};
