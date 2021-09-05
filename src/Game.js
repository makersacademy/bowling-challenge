class Game {
  constructor(frame = new Frame()) {
    this.frameNo = 1;
    this.frames = [];
    this.currentFrame = frame;
    this.currentscore = 0;
    this.gameOver = false;
  }

  nextFrame(frame = new Frame()) {
    if (this.frameNo > 10) {
      return (this.gameOver = true);
    } else {
      this.frames.push(this.currentFrame);
      this.frameNo++;
      if (this.frameNo < 10) {
        this.currentFrame = frame;
      } else if (this.frameNo === 10) {
        this.finalFrame();
      }
    }
  }

  finalFrame(frame = new FinalFrame()) {
    this.currentFrame = frame;
  }

  rollBall(value) {
    this.currentFrame.roll(value);
    if (this.currentFrame.endFrame) {
      this.nextFrame();
    }
  }

  score() {
    this.currentscore = 0;
    for (let i = 0; i < this.frameNo - 1; i++) {
      if (i === 9) {
        this.currentscore +=
					this.frames[i]['rollOne'] +
					this.frames[i]['rollTwo'] +
					this.frames[i]['rollThree'];
      } else {
        if (i < this.frameNo - 2) {
          if (this.isSpare(i)) {
            this.currentscore += this.frames[i + 1]['rollOne'];
          }
        }
        if (i < this.frameNo - 2) {
          if (this.isStrike(i)) {
            this.scoreStrike(i);
          }
        }
        this.currentscore +=
					this.frames[i]['rollOne'] + this.frames[i]['rollTwo'];
      }
    }
    return this.currentscore;
  }

  isSpare(index) {
    return this.frames[index]['frameType'] === 'Spare';
  }

  isStrike(index) {
    return this.frames[index]['frameType'] === 'Strike';
  }

  scoreStrike(index) {
    if (!this.isStrike(index + 1)) {
      this.currentscore +=
				this.frames[index + 1]['rollOne'] + this.frames[index + 1]['rollTwo'];
    } else {
      if (index + 2 < this.frameNo - 1) {
        this.currentscore +=
					this.frames[index + 1]['rollOne'] + this.frames[index + 2]['rollOne'];
      }
    }
  }
}
