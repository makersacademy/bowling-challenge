class Bowling {
  constructor() {
    this.frames = [new Frame];
    this.currentFrame = 0;
  }

  roll(pins) {
    this.createNewFrame();
    this.getCurrentScores().push(pins);
    if (this.currentFrame > 0) {
      this.updateBonusPoints(pins);
    }
  }

  getCurrentScores() {
    return this.frames[this.currentFrame].scores;
  }

  createNewFrame() {
    // Tenth frame.
    if (this.frames.length == 10) {
      if (this.frames[9].scores.length == 1) {
        return;
      }
      // second roll or third in tenth
      if (this.frames[9].isExtraRoll()) {
        return;
      } else {
        return; // end game function.
      }
    } else if (this.getCurrentScores().includes(10) || 
               this.getCurrentScores().length == 2) {
      this.frames.push(new Frame);
      this.currentFrame++;
    }
  }

  updateBonusPoints(pins) {
    var previousFrame = this.frames[this.currentFrame - 1];
    if (previousFrame.isSpare()) {
      // isSpare checks if bonus not already added.
      previousFrame.scores.push(pins);
    }

    if (previousFrame.isStrike()) {
      previousFrame.scores.push(pins);
    }
    // consecutive strikes
    if (this.currentFrame > 1) {
      var twoFramesAgo = this.frames[this.currentFrame - 2];
      if (twoFramesAgo.isStrike()) {
        twoFramesAgo.scores.push(pins);
      }
    }
  }
}

// could unhide all buttons when a new frame is created?
