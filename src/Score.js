function Score() {
  this.totalScore = 0;
  this.frame = [];
};

Score.prototype.bowl = function(n) {
  this.frame.push(n);
}
