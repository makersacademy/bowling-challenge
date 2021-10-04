'use strict';

class Scorecard{
  constructor(frame = new Frame()) {
    this.frames = [frame];
    this.currentFrame = 0;
  }

  addPins(num) {
    this._isNewFrameNeeded();
    // this.checkStrikePreviousFrame(num);
    // this.spareCheck();
    this.frames[this.currentFrame].storePins(num);
    this.calculateBonus(num);
  }

  moveToNextFrame() {
    this.currentFrame ++;
  }

  createFrame(frame = new Frame()) {
    this.frames.push(frame);
  }

  _isNewFrameNeeded() {
    if (this.frames[this.currentFrame].isComplete()) {
      this.moveToNextFrame();
      this.createFrame();
    }
  }

  calculateBonus(num) {
    let i = this.currentFrame;
    if (i >= 2 && this.frames[i - 2].isStrike() && this.frames[i - 2].showStrikeBonus().length < 2) {
      this.frame[i - 2].addStrikeBonus(num);
    }
    if (i >= 1 && this.frames[i - 1].isStrike()) {
      this.frames[i - 1].addStrikeBonus(num);
    }
  }
};
  //   for (let i = 0; i < this.frames.length; i++) {
  //     if (this.frames[i + 1]) {
  //       console.log(this.frames[i + 1].showFrameRolls()[0])
      
  //       if (this.frames[i].isStrike) {
  //         this.frames[i].addStrikeBonus(this.frames[i + 1].showFrameRolls()[0])
  //         // if (this.frames[this.currentFrame + 1].isStrike) {
  
  //         // }
  //       }
  //     }
  //   }
  // }
  // checkStrikePreviousFrame(num) {
  //   if (this.frames.length > 1 && this.frames[this.currentFrame -1].isStrike()) {
  //     this.frames[this.currentFrame -1].addStrikeBonus(num);
  //   }
  // }

  // checkDoubleStrike() {
  //   if (this.frames.length > 2) {
  //     return checkSingleStrike() && this.frames[this.currentFrame -2].isStrike();
  //   }
  // }

  // checkSingleStrike() {
  //   if (this.frames.length > 1) {
  //     return this.frames[this.currentFrame -1].isStrike()
  //   }
  // }
