"use strict";

class Scoring {
  constructor() {
    this._scores = [];
  }

  calculateScore(frames) {
    for (const frame of frames) {
      this._getFrameValues(frame, frames);
      if (frame.rollOne() === null) {
        break;
      }
      frame.rollTwo() === null
        ? this._incompleteFrame(frame)
        : this._completeFrame(frame);
    }
    return this._scores;
  }

  _getFrameValues(frame, frames) {
    const frameIndex = frames.indexOf(frame);
    this._oneFrameAhead = frames[frameIndex + 1];
    this._twoFramesAhead = frames[frameIndex + 2];
  }

  _incompleteFrame(frame) {
    this._scores.push(frame.rollOne());
  }

  _completeFrame(frame) {
    this._totalFrameScore = frame.rollOne() + frame.rollTwo();
    this._totalFrameScore < 10
      ? this._addFrameScore()
      : this._bonusFrame(frame);
  }

  _addFrameScore(bonuses = 0) {
    this._scores.push(this._totalFrameScore + bonuses);
  }

  _bonusFrame(frame) {
    if (
      frame.isFinalFrame() === true ||
      this._oneFrameAhead.rollOne() === null
    ) {
      const bonus = frame.isFinalFrame() === true ? frame.rollThree() : 0;
      this._addFrameScore(bonus);
      return;
    }
    frame.rollOne() === 10 ? this._addStrike() : this._addSpare();
  }

  _addSpare() {
    this._addFrameScore(this._oneFrameAhead.rollOne());
  }

  _addStrike() {
    this._oneFrameAhead.rollTwo() === null
      ? this._addSpare()
      : this._strikeType();
  }

  _strikeType() {
    const result =
      this._oneFrameAhead.rollOne() < 10 ||
      this._oneFrameAhead.isFinalFrame() === true;
    result ? this._singleStrike() : this._doubleStrike();
  }

  _singleStrike() {
    const nextFrameTotal =
      this._oneFrameAhead.rollOne() + this._oneFrameAhead.rollTwo();
    this._addFrameScore(nextFrameTotal);
  }

  _doubleStrike() {
    if (this._twoFramesAhead.rollOne() === null) {
      this._singleStrike();
      return;
    }
    this._addFrameScore(
      this._oneFrameAhead.rollOne() + this._twoFramesAhead.rollOne()
    );
  }
}
