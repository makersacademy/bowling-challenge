function Game() {
  this.score = 0;
}

Game.prototype.setScore = function(frames) {
  if (frames.includes(10)) {
    this.strikeCalculator(frames);
    return this.score
  }
  this.score = frames.reduce((a, b) => a + b, 0);
  return this.score;
}


Game.prototype.strikeCalculator = function(array) {
  array.forEach((number, index, arr) => {
    console.log(number);
    if (number == 10) {
      this.score += 10;
      this.score += arr[index+1];
    } else {
      this.score += number;
    }
  })
}