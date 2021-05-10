'use strict';

class ScoreRecorder {
  constructor(frames = []) {
    this._frames = frames;
  };

  frames() {
    return this._frames
  };

  addRoll(score) {
    if (this.isGameEnd()) {
      return 0;
    } else if (this.nextInputRoll() === 1) {
      this.addNewFrame(score);
    } else {
      this.addToLastFrame(score);
    };
    return this._frames
  };

  nextInputRoll() {
    if (this.isGameEnd()) {
      return 0;
    } else if (this.isNewGame() || this.isCompletedFrame()) {
      return 1;
    } else {
      return this.currentRoll() + 1;
    };
  };

  nextInputFrame() {
    if (this.isGameEnd()) {
      return 0;
    } else if (this.nextInputRoll() === 1) {
      return this.currentFrameIndex() + 1;
    } else {
      return this.currentFrameIndex();
    };
  };

  // Private Methods:

  addNewFrame(score) {
    this._frames.push([score])
  }

  addToLastFrame(score) {
    this.currentFrameContent().push(score)
  }

  currentRoll() {
    return this.currentFrameContent().length
  }

  currentFrameIndex() {
    return this._frames.length
  }

  currentFrameContent() {
    const lastIndex = this._frames.length - 1
    return this._frames[lastIndex];
  };

  isNewGame() {
    return this._frames.length === 0;
  };

  isCompletedFrame() {
    if (this.isTenthFrame()) {
      return this.isFullFrame();
    } else {
      return this.isFullFrame() || this.isStrike();
    };
  };

  isFullFrame() {
    if (this.isExtraRollRequired()) {
      return this.currentFrameContent().length === 3;
    } else {
      return this.currentFrameContent().length === 2;
    };
  };

  isExtraRollRequired() {
    return this.isTenthFrame() && (this.isStrike() || this.isSpare());
  };

  isTenthFrame() {
    return this._frames.length === 10;
  };

  isStrike() {
    return this.currentFrameContent()[0] === 10;
  };

  isSpare() {
    if (this.currentFrameContent().length >= 2) {
      return this.currentFrameContent()[0] + this.currentFrameContent()[1] == 10;
    } else {
      return false;
    };
  };

  isGameEnd() {
    return this.isTenthFrame() && this.isFullFrame();
  };
};
