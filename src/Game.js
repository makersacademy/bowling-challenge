'use strict';

class Game {

  constructor(frame1 = new Frame(), frame2 = new Frame(), frame3 = new Frame(), frame4 = new Frame(), frame5 = new Frame(), frame6 = new Frame(), frame7 = new Frame(), frame8 = new Frame(), frame9 = new Frame(), finalFrame = new FinalFrame()) {
    this.frames = new Array(10);
    this.frames[0] = frame1;
    this.frames[1] = frame2;
    this.frames[2] = frame3;
    this.frames[3] = frame4;
    this.frames[4] = frame5;
    this.frames[5] = frame6;
    this.frames[6] = frame7;
    this.frames[7] = frame8;
    this.frames[8] = frame9;
    this.frames[9] = finalFrame;
    this.bonusScores = new Array(10);
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

  finalScore() {
    let totalScore = 0;
    this.frames.forEach( (frame, i) => {
      totalScore += frame.score();
      if (frame.isSpare()) {
        let bonusScore = this.spareBonus(i);
        totalScore += bonusScore;
        this.bonusScores[i] = bonusScore;
      } else if (frame.isStrike()) {
        let bonusScore = this.strikeBonus(i);
        totalScore += bonusScore;
        this.bonusScores[i] = bonusScore;
      }
    })
    return totalScore;
  }

  // score() {
  //   //bonusScores array is empty until final_score is ran...
  //   let cumulativeScore = 0;
  //   for (let frame of this.frames) {
  //     if (frame === undefined) {
  //       continue;
  //     } else {
  //       cumulativeScore += frame.score();
  //     }
  //   }

  //   for (let bonusScore of this.bonusScores) {
  //     if (bonusScore === undefined) {
  //       continue;
  //     } else {
  //       cumulativeScore += bonusScore;
  //     }
  //   }
  //   return cumulativeScore;
  // }

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
      return this.frames[i + 1].pins(1) + this.frames[i + 1].pins(2);
    } else if (this.frames[i + 1].isStrike()) {
      return this.frames[i + 1].score() + this.frames[i + 2].pins(1);
    } else {
      return this.frames[i + 1].score();
    }
  }
}