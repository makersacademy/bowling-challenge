class Bowling {
  constructor() {
    this.bonus = 0;
    this.total = 0;
    this.frame = 1;
    this.currentFrame = [];
  }

  addRoll(pins) {
    var score = 0;
    if(!this.isGameContinues()) throw new Error('The game is over');
    this.isBonus() ? score = this.multiplier(pins) : score = pins;
    this.applyScore(pins, score);
    if(this.isEndFrame()) this.endFrame();
  }

  endFrame() {
    if(this.isSpare()) this.bonus++;
    if(this.isStrike()) this.bonus = this.bonus + 2;
    this.currentFrame = [];
    this.frame++;
  }

  multiplier(pins) {
    var newScore = 0
    this.isDoubleBonus() ? newScore = pins * 3 : newScore = pins * 2;
    return newScore
  }

  applyScore(pins, score) {
    if(this.isDoubleBonus()) {
      this.bonus = this.bonus - 2;
    } else if(this.isBonus()) {
      this.bonus--;
    }
    this.total = this.total + score;
    this.currentFrame.push(pins);
  }

  isEndOfFrame() {
    if(this.frame < 10) {
      if(this.currentFrame.length === 2 || this.currentFrameSum() === 10) {
        return true;
      } else {
        return false;
      }
    } else {
      if(this.currentFrame.length === 3 && this.currentFrameSum() >= 10) {
        return true;
      } else {
        return false;
      }
    }
  }

  isSpare() {
    if(this.currentFrame.length === 2 && this.currentFrameSum() === 10) {
      return true;
    } else {
      return false;
    }
  }

  isStrike() {
    if(this.currentFrame.length === 1 && this.currentFrame[0] === 10) {
      return true;
    } else {
      return false;
    }
  }

  isBonus() {
    if(this.bonus > 0) {
      return true;
    } else {
      return false;
    }
  }

  isDoubleBonus() {
    if (this.bonus >= 3) {
      return true;
    } else {
      return false;
    }
  }

   isGameContinues() {
    if(this.frame < 10 || (this.frame === 10 && this.isTenthFrameException())) {
      return true;
    } else {
      return false;
    }
  }

  isTenthFrameException() {
    if(this.currentFrame.length < 2 || (this.currentFrameSum() >= 10 && this.currentFrame.length < 3)) {
      return true;
    } else {
      return false;
    }
  }

  currentFrameSum() {
    return this.currentFrame.reduce((a, b) => a + b, 0);
  }
}