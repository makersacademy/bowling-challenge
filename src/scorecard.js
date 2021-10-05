'use strict';

class Scorecard{
  constructor(frame = new Frame()) {
    this.frames = [frame];
    this.currentFrame = 0;
    this.gameTotalScore = 0;
  }

  addPins(num) {
    this._isNewFrameNeeded();
    this.frames[this.currentFrame].storePins(num);
    this.calculateBonus(num);
    this.calculateScorecardTotal();
    this.isGameOver();
  }

  moveToNextFrame() {
    this.currentFrame ++;
  }

  createFrame(frame = new Frame()) {
    this.frames.push(frame);
  }

  _isNewFrameNeeded() {
    if (this.currentFrame === 9) {
      return;
    }
    if (this.frames[this.currentFrame].isComplete()) {
      this.moveToNextFrame();
      this.createFrame();
    }
  }

  calculateBonus(num) {
    let i = this.currentFrame;
    if (i >= 1 && this.frames[i - 1].isStrike() && this.frames[i - 1].showStrikeBonus().length < 2) {
      this.frames[i - 1].addStrikeBonus(num);
      if (i >= 2 && this.frames[i - 2].isStrike() && this.frames[i - 2].showStrikeBonus().length < 2) {
        this.frames[i - 2].addStrikeBonus(num);
      }
    }
    if (i >= 1 && this.frames[i - 1].isSpare() && this.frames[i - 1].showSpareBonus().length < 1) {
      this.frames[i - 1].addSpareBonus(num);
    }
  }

  calculateScorecardTotal() {
    this.gameTotalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      this.gameTotalScore += this.frames[i].calculateTotal();
    }
    return this.gameTotalScore;
  }

  isGameOver() {
    if (this.currentFrame === 9 && this.frames[this.currentFrame].lastFrameCheck()) {
      console.log(`Game Over, you scored ${this.gameTotalScore}`)
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
