function Score(total = 0, frameTotal = 0){
  this.total = total
  this.frameTotal = frameTotal
}

Score.prototype.roll = function(n) {
  return this.frameTotal += n
};
