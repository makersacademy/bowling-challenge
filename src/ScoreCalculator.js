'use strict';

class ScoreCalculator {
  constructor() {
    this._frames = [];
  };

  gameScore(frames) {
    return this.sum(this.frameScores(frames));
  };

  frameScores(frames) {
    this._frames = frames;
    let frameScoresList = [];
    let frameScore;
    console.log()
    this._frames.forEach(function(_frame, index) {
      if (this.isTenthFrame(index)) {
        frameScore = this.tenthFrameScore();
      } else {
        frameScore = this.midGameFrameScore(index);
      };
      frameScoresList.push(frameScore);
    }, this);
    return frameScoresList;
  };

  // Private Methods:

  tenthFrameScore() {
    return this.sum(this._frames[9]);
  }

  midGameFrameScore(index) {
    let total_score = this.basicFrameScore(index);
    if (this.isSpare(index)) {
      total_score += this.spareBonusScore(index);
    } else if (this.isStrike(index)) {
      total_score += this.strikeBonusScore(index);
    };
    return total_score;
  };

  basicFrameScore(index) {
    return this.sum(this._frames[index].slice(0, 2));
  };

  spareBonusScore(index) {
    if (this.isLastFrame(index)) {
      return 0;
    } else {
      return this._frames[index + 1][0];
    };
  };

  strikeBonusScore(index) {
    if (this.isLastFrame(index)) {
      return 0;
    } else if (this.isStrike(index + 1)) {
      return this.strikeFollowsStrikeBonusScore(index);
    } else {
       return this.basicFrameScore(index + 1);
    };
  };

  strikeFollowsStrikeBonusScore(index) {
    if (this.isNinthFrame(index)) {
      return this.basicFrameScore(index + 1);
    } else {
      return this.spareBonusScore(index) + this.spareBonusScore(index + 1);
    };
  };

  isAllPinsDown(score) {
    return score === 10;
  };

  isSpare(index) {
    if (this.isStrike(index)) {
      return false;
    } else {
     return this.isAllPinsDown(this.basicFrameScore(index));
    };
  };

  isStrike(index) {
    return this.isAllPinsDown(this._frames[index][0]);
  };

  isLastFrame(index) {
    if (this._frames.length > index + 1) {
      return false;
    } else {
      return true;
    };
  };

  isNinthFrame(index) {
    return index === 8;
  };

  isTenthFrame(index) {
    return index === 9;
  };

  sum(array) {
    return array.reduce((a, b) => a + b, 0)
  };
};
