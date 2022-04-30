class Scoresheet {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  newFrame(frame) {
    this.currentFrame = frame;
  }

  frameScore(frameNum) {
    let score = 0;
    score += this.frames[frameNum].firstRoll();
    if (this.frames[frameNum].isStrike() === true) {
      score += this.#strikeBonus(frameNum);
    } else if (this.frames[frameNum].isSpare() === true) {
      score += this.frames[frameNum].secondRoll();
      score += this.#spareBonus(frameNum);
    } else {
      score += this.frames[frameNum].secondRoll();
    }
    return score;
  }

  totalScore() {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      score += this.frameScore(i);
    }
    return score;
  }

  #strikeBonus(frameNum) {
    let bonus = 0
    if (frameNum === 9) {
      bonus += this.frames[frameNum].secondRoll() + this.frames[frameNum].bonusRoll();
    } else if (frameNum === 8 && this.frames[frameNum + 1].isStrike() === true) {
      bonus += this.frames[frameNum + 1].firstRoll() + this.frames[frameNum + 1].secondRoll();
    } else if (this.frames[frameNum + 1].isStrike() === true) {
      bonus += this.frames[frameNum + 1].firstRoll() + this.frames[frameNum + 2].firstRoll();
    } else {
      bonus += this.frames[frameNum + 1].firstRoll() + this.frames[frameNum + 1].secondRoll();
    }
    return bonus
  }

  #spareBonus(frameNum) {
    let bonus = 0 
    if (frameNum === 9) {
      bonus += this.frames[frameNum].bonusRoll();
    } else {
      bonus += this.frames[frameNum + 1].firstRoll();
    }
    return bonus
  }
  
}

module.exports = Scoresheet;