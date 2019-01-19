class ScoreCard {
  constructor() {
    this.frames = [];
  }

  totalScore() {
    return 0;
  }

  isComplete() {
    return true;
  }

  addFrame(frame) {
    if (this.frames.length < 10 ) {
      this.frames.push(frame);
    } else {
      throw new Error('This game already has 10 frames');
    };
  }
}

