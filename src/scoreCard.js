/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
"use strict";

class ScoreCard {
  constructor(frame) {
    this.frameSheet = [];
    this.scoreSheet = [];
    this.frame = frame;
    this.bonusTracker = 0;
  }

  addRoll(val) {
    this.frame.addRoll(val);
    let fs = this.frameSheet;
    let len = fs.length;

    if (this.isSpecialSituation()) {
      if (len >= 12) {
        throw new Error("No more rolls");
      }
    } else {
      if (len >= 10) {
        throw new Error("No more rolls");
      }
    }

    if (this.frame.frameComplete() === true) {
      fs.push(this.frame.frameRolls);

      //2strikes
      if (fs[len - 2] == 10 && fs[len - 1] == 10) {
        fs[len - 2][0] += calculateBonus2Strikes(fs);
      }

      //1strike
      if (fs[len - 1] == 10) {
        fs[len - 1][0] += calculateBonus1Strike(fs);
      }

      //spare
      let frame = fs[len - 1];
      if (fs.length > 1) {
        let frameScore = this.frameScore(frame);
        let frameLength = this.frameLength(frame);

        if (frameScore == 10 && frameLength == 2) {
          fs[len - 1] = frameScore + calculateBonusSpare(fs);
        }
      }

      console.log("=======");
      console.log(`FrameSheet ${this.frameSheet.length}:` + this.frameSheet);

      this.frame.reset();
    }
  }

  frameSheet() {
    return this.frameSheet;
  }

  gameTotal() {
    return this.frameSheet
      .map(frame => frame.reduce((acc, val) => acc + val))
      .reduce((acc, frameTotal) => acc + frameTotal);
  }

  // scoreSheetTest() {}

  bonusTracker() {
    return this.bonusTracker;
  }

  frameScore(frame) {
    return frame.reduce((acc, val) => acc + val);
  }

  frameLength(frame) {
    return frame.length;
  }

  isSpecialSituation() {
    let fs = this.frameSheet;
    if (fs.length < 10) {
      return false;
    } else {
      let currentTotal = fs.reduce((acc, val) => acc + val);
      if (fs[fs.length - 1][0] === 10 && currentTotal >= 270) {
        return true;
      }
      return false;
    }
  }
}

//Helper method: Calculate bonus after each frame
function calculateBonus2Strikes(fs) {
  let len = fs.length - 1;
  let bonus = 0;

  if (fs[len - 2] == 10 && fs[len - 1] == 10) {
    if (fs[len] != 10) {
      bonus = fs[len - 1][0] + fs[len][0];
    } else {
      bonus = fs[len - 1][0] + fs[len].reduce((acc, val) => acc + val);
    }
  }
  return bonus;
}

function calculateBonus1Strike(fs) {
  let len = fs.length - 1;
  let bonus = 0;

  if (fs[len - 1] == 10) {
    if (fs[len] != 10) {
      bonus = fs[len].reduce((acc, val) => acc + val);
    }
  }

  return bonus;
}

function calculateBonusSpare(fs) {
  let len = fs.length - 1;
  let bonus = 0;

  let frameScore = fs[len - 1].reduce((acc, val) => acc + val);

  if (frameScore == 10 && fs[len - 1].length == 2) {
    bonus += fs[len][0];
  }

  return bonus;
}
