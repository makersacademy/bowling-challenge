export default class ScoreCard {
  constructor() {
    this.frames = [];
    this.turn = 0;
    this.isStrike = false;
    this.isSpare = false;
    this.score = 0;
  }

  playBowling(frame) {
    this.turn += 1;
    this.updatePastScore(frame);
    if (this.turn < 10) {
      this.calculateStandardFrame(frame);
    } else if (this.turn === 10) {
      this.saveStrike(frame);
      this.saveSpare(frame);
      return this.finalFrameScore(frame);
    } else {
      throw new Error('You have played the last frame. Start a new game!');
    }
  }

  saveStrike(frame) {
    if (frame.firstRoll === 10) {
      this.isStrike = true;
    } else {
      this.isStrike = false;
    }
  }

  saveSpare(frame) {
    if (frame.frameTotalScore === 10 && frame.firstRoll < 10) {
      this.isSpare = true;
    } else {
      this.isSpare = false;
    }
  }

  updatePastScore(frame) {
    const pastFrame = this.frames[this.frames.length - 1];
    const pastPastFrame = this.frames[this.frames.length - 2];
    if ((this.turn === 2) && (this.isStrike === true) && (frame.firstRoll !== 10)) {
      pastFrame.frameTotalScore += (frame.firstRoll + frame.secondRoll);
    } else if ((this.turn === 10) && (this.isStrike === true) && (frame.firstRoll === 10)) {
      this.lastTurnWithConsecutiveStrikes(frame);
    } else if ((this.turn === 10) && (this.isStrike === true) && (frame.firstRoll !== 10)) {
      this.lastTurnWithOnePrevStrike(frame);
    } else if ((this.turn > 2) && (this.isStrike === true)) {
      this.regularTurnWithPrevStrike(frame);
    } else if ((this.turn > 1) && (this.isSpare === true)) {
      pastFrame.frameTotalScore += (frame.firstRoll);
    }
  }

  lastTurnWithConsecutiveStrikes(frame) {
    const pastFrame = this.frames[this.frames.length - 1];
    const pastPastFrame = this.frames[this.frames.length - 2];
    pastFrame.frameTotalScore += (frame.firstRoll + frame.secondRoll);
    if (pastPastFrame.firstRoll === 10) {
      pastPastFrame.frameTotalScore = 30;
    }
  }

  lastTurnWithOnePrevStrike(frame) {
    const pastFrame = this.frames[this.frames.length - 1];
    const pastPastFrame = this.frames[this.frames.length - 2];
    pastFrame.frameTotalScore += (frame.firstRoll + frame.secondRoll);
    if (pastPastFrame.frameTotalScore === 10) {
      pastPastFrame.frameTotalScore += (pastFrame.firstRoll + frame.firstRoll);
    }
  }

  regularTurnWithPrevStrike(frame) {
    const pastFrame = this.frames[this.frames.length - 1];
    const pastPastFrame = this.frames[this.frames.length - 2];
    if (frame.firstRoll !== 10) {
      pastFrame.frameTotalScore += (frame.firstRoll + frame.secondRoll);
      pastPastFrame.frameTotalScore += (pastFrame.firstRoll + frame.firstRoll);
    } else if (frame.firstRoll === 10) {
      pastFrame.frameTotalScore = frame.frameTotalScore;
      if (pastPastFrame.firstRoll === 10) {
        pastPastFrame.frameTotalScore = 30;
      }
    }
  }

  calculateStandardFrame(frame) {
    this.saveStrike(frame);
    this.saveSpare(frame);
    this.frames.push(frame);
    this.calculateScore();
  }

  finalFrameScore(frame) {
    if (frame.frameTotalScore < 10) {
      this.frames.push(frame);
      this.calculateScore();
    }
    if ((frame.firstRoll === 10) || (frame.frameTotalScore === 10)) {
      frame.frameTotalScore += frame.thirdRoll;
      this.frames.push(frame);
      this.calculateScore();
    }
  }

  calculateScore() {
    this.score = this.frames.reduce((sum, frame) => sum + frame.frameTotalScore, 0);
    return this.score;
  }
}
