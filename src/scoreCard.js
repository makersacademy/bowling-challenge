class ScoreCard {
  constructor() {
    this.frames = [];
    this.score = 0;
  }

  addFrame(frame) {
    if (this.frameNumber() < 10 ) {
      this.frames.push(frame);
    } else {
      throw new Error('This game already has 10 frames');
    };
  }

  frameNumber() {
    return this.frames.length;
  }

  currentScore() {
    let total = 0;
    let frame = this.frames;
    frame.forEach(function(frames) {
      frames.forEach(function(bowls) {
        total += bowls;
      })
    })
  return total;
  }

  isComplete() {
    if (this.frames.length === 10 ) {
      this.score = this.currentScore()
      return true;
    } else {
      return false;
    }
  }

  
}

