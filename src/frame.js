function Frame() {
  this.roundScoreArray = [];
  // Could pass in a function for round type - if last round then have own function

}

Frame.prototype.playRound = function(roll1, roll2 = undefined) {

  this.roundScoreArray.push(roll1);

  if (roll1 < 10) {
    this.roundScoreArray.push(roll2);
  }

  return this.roundScoreArray;

};
