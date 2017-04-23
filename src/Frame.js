// know the status of each frame
function Frame(pins = new Pins()) {
  this.scores = [];
  this.pins = pins;
}

Frame.prototype.saveScore = function(score) {
  this.scores.push(score);
  console.log(this.pins.get());
  this.pins.update(score);
}

Frame.prototype.isComplete = function() {
  return (this.scores.length === 2 || this.scores[0] === 10);
}

Frame.prototype.hasBonus = function() {
  if (this.scores[0] === 10) {
    return 'strike';
  } else if (this.scores[1] === 10 || this.totalScore() === 10) {
    return 'spare';
  }
}

Frame.prototype.totalScore = function() {
  return this.scores.reduce((a, b) => a + b,0)
}
