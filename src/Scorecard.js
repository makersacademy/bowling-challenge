class Scorecard {
  constructor() {
    this.score = 0;
    this.frames= [];
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
      } else {
        this.score += number;
      }
    });
  }
  addFrame(roll1, roll2) {
    this.frames.push(new Frame());
    this.frames[0].setValues(roll1, roll2);
    this.setScore2();
  }

  setScore2() {
    const frame = this.frames[0];
    const scoreToAdd = frame.roll2;
    this.score += scoreToAdd;
  }
}
