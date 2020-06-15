'use strict';

class Bowling {
  constructor(frame = new Frame()) {
    this.gameFrames = [frame];
    this.frameNum = 0;
    this.turn = 0;
    this.gameTotal = 0
  };

  nextFrame() {
    this.frameNum ++;
    this.addFrame()
  };

  nextTurn(num) {
    this.turn++;
    this.nextFrameCheck(num)
  }

  currentScore() {
    return this.gameTotal;
  }

  addFrame(frame = new Frame()) {
    this.gameFrames.push(frame);
  }

  increaseScore(num) {
    this.gameTotal += num;
  }

  bowl(num) {
    let i = this.frameNum
    this.gameFrames[i].add(num);
    this.increaseScore(num);
    this.spareCheck(num);
    this.strikeCheckOne(num);
    this.strikeCheckTwo(num);
    this.nextTurn(num);
  }

  spareCheck(num) {
    let i = this.frameNum;
    if (this.frameLengthCheck() > 1 && this.gameFrames[i-1].spare()) {
      this.gameFrames[i-1].add(num);
      this.increaseScore(num);
    }
  }

  strikeCheckOne(num) {
    let i = this.frameNum;
    if (this.frameLengthCheck() > 1 && this.gameFrames[i-1].strike()) {
      this.gameFrames[i-1].add(num);
      this.increaseScore(num);
    }
  }

  strikeCheckTwo(num) {
    let i = this.frameNum;
    if (this.frameLengthCheck() > 2 && this.gameFrames[i-2].strike()) {
      this.gameFrames[i-2].add(num);
      this.increaseScore(num);
    }
  }

  frameLengthCheck() {
    return this.gameFrames.length
  } 

  nextFrameCheck(num) {
    if (this.turn === 2 || num === 10) {
      this.resetTurn();
      this.nextFrame();
    }
  }

  resetTurn() {
    this.turn = 0;
  }

}
