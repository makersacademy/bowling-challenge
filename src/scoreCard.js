class ScoreCard {
  constructor(frame = new Frame()) {
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
    let frames = this.frames;
    frames.forEach(function(frame) {
      frame.forEach(function(bowls) {
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

