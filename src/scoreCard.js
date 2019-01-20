class ScoreCard {
  constructor() {
    this.frames = [];
    this.score = 0;
  }

  addFrame(frame) {
    if (this.frames.length < 10 ) {
      this.frames.push(frame);
    } else {
      throw new Error('This game already has 10 frames');
    };
  }

  frameNumber() {
    return this.frames.length;
  }

  totalScore() {
    var total = 0
    //var self = this
    this.frames.forEach(function(thisFrame) {
      total += (thisFrame.frameScore());
    });
  return total
  }

  isComplete() {
    if (this.frames.length === 10 ) {
      return true;
    } else {
      return false;
    }
  }

  
}

