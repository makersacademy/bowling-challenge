function UserScore() {
  this.score = []
}

UserScore.prototype.add = function(frame) {
  this.score.push(frame);
};
