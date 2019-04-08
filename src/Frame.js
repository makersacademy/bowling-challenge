
function Frame(score1, score2) {
  this.turn = [score1, score2];
  this.score = 0;
};

Frame.prototype.roundScore = function() {

  const result = this.turn[0] + this.turn[1];

  this.score += result;
  // if (this.turn[0] === 10) {
  //   this.score += 10;
  // }
  // if (this.turn[0] !== 10 && result === 10) {
  //   this.score += 10;
  // }
  // if (result !== 10) {
  //   this.score += result;
  // };

};
