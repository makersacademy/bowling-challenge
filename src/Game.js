'use strict';

class Game {

  constructor(frame = new Frame(), finalFrame = new finalFrame()) {
    this.frames = new Array(10);
    for (let i = 0; i < 9; i++) {
      this.frames[i] = frame;
    }
    this.frames[9] = finalFrame;
  }

  roll(number) {
    for (let frame of this.frames) {
      if (frame.isEnded()) {
        continue;
      } else {
        frame.add(number);
        break;
      }
    }
  }

  final_score() {
    let score = 0;
    this.frames.forEach( (frame, i) => {
      score += frame.score();
      console.log("Hello this is frame");

      if (frame.isSpare()) {
        console.log("Frame is a spare");
        score += this.spareBonus(i);
      } else if (frame.isStrike()) {
        console.log("Frame is a strike");
        score += this.strikeBonus(i);
      }
    })
    console.log("Finished calculating score")
    return score;
  }

  spareBonus(i) {
    if (i === 9) {
      return this.frames[i].bonusScore();
    } else {
      return this.frames[i + 1].pins(1);
    }
  }

  strikeBonus(i) {
    if (i === 9) {
      return this.frames[i].bonusScore();
    } else if (this.frames[i + 1].isStrike() && i === 8) {
      return this.frames[i + 1].score() + this.frames[i + 1].pins(2);
    } else if (this.frames[i + 1].isStrike()) {
      return this.frames[i + 1].score() + this.frames[i + 2].pins(1);
    } else {
      return this.frames[i + 1].score();
    }
  }
}