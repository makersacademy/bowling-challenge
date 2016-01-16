function Score() {
  this.scores = [];
}

Score.prototype.giveScore = function(pins) {
  var total = 0;
  for(var i = 0; i < (pins.length - 1); i++) {
    if(pins[i][0] === 10) {
      total += (10 + pins[i+1][0] + pins[i+1][1])
      this.scores.push(total);
    } else if(pins[i][0] + pins[i][1] === 10) {
      total += (10 + pins[i+1][0])
      this.scores.push(total);
    } else {
      total += (pins[i][0] + pins[i][1])
      this.scores.push(total);
    }
  }
  total += pins[pins.length -1][0] + pins[pins.length -1][1];
  this.scores.push(total);
  return this.scores;
};
