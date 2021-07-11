'use strict';

class Game {

  constructor(frame = new Frame()) {
    this.frames = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.frames[i] = frame;
    }
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
      // console.log("Hello this is frame");

      if (frame.isSpare()) {
        // console.log("Frame is a spare");
        score += this.spareBonus(i);
      } else if (frame.isStrike()) {
        score += this.strikeBonus(i);
      }
    })
    // console.log("Finished calculating score")
    return score;
  }

  spareBonus(i) {
    return this.frames[i + 1].pins(1);
  }

  strikeBonus(i) {
    return this.frames[i + 1].score();
  }
}