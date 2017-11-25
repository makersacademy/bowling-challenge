function Frame() {
  this.rollTally = [];
  this.totalPoints = 0;
}

Frame.prototype = {
  addRollToFrame: function(roll) {
    this.rollTally.push(roll);
    this.totalPoints += roll.pinfall;
  }
}
