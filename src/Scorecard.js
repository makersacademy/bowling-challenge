class Scorecard {
  constructor() {
    this.score = 0;
  }
  setScore(frames) {
    if (frames.includes(10)) {
      this.strikeCalculator(frames);
      return this.score;
    }
    this.score = frames.reduce((a, b) => a + b, 0);
    return this.score;
  }
  strikeCalculator(array) {
    array.forEach((number, index, arr) => {
      if (number == 10) {
        this.score += 10;
        this.score += arr[index + 1];
      }
      else {
        this.score += number;
      }
    });
  }
}
