"use strict";

class Game {
  constructor(frames = new Frame().generateFramesArray()) {
    this._frames = frames;
    this._currentFrame = this._frames[0];
    this._currentIndex = this._frames.indexOf(this._currentFrame);
  }

  bowl(pins) {
    if (this._currentFrame.isFull()) {
      if (this._currentIndex === 9) {
        throw "Game is complete";
      }
      this._currentIndex += 1;
      this._currentFrame = this._frames[this._currentIndex];
    }
    this._currentFrame.add(pins);
  }

  scorecard(scoreGenerator = new Scoring()) {
    this._frameScores = scoreGenerator.cumulativeScore(this._frames);
  }

  getCurrentFrame() {
    return this._currentIndex + 1;
  }
}
