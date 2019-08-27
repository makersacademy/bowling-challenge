'use strict;'


class Scorecard {

  constructor() {
    this.roll = 0;
    this.frame = 0;
    this.total_score = 0;
    this.frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.rolls = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
    // for (var i = 0; i < 10; i++) {
    //   this.rolls.push([])
    // };
    // for (var i = 0; i < 10; i++) {
    //   this.frames.push(0)
    // };
  }

  addRoll(score) {
    // Guard clauses
    if (this.roll === undefined || this.frame === undefined) {
      throw new Error("Game is over, go home!")
    };
    if (score < 0 || score > 10) {
      throw new Error("Invalid number of pins")
    }
    // this will allow the third roll in frame 10 to be whatever
    if (this.frameRollTotal(this.frame) < 9 && this.frameRollTotal(this.frame) + score > 10) {
      throw new Error("Cannot score more than 10 in two standard rolls")
    }

    this.rolls[this.frame].push(score)

    // Update roll and frame
    if (this.frame === 9) {
      // Logic behind the final frame. Three rolls allowed if first two >= 10
      if (this.roll === 0) {
        this.roll++;
      } else if (this.roll === 1 && (this.frameRollTotal(9) >= 10)) { // do you need a bonus roll?
        this.roll++;
      } else {
        this.roll = undefined;
        this.frame = undefined;
      };
      // now deal with strikes or non strikes as normal
    } else if (this.roll === 1 || score === 10) {
      this.roll = 0;
      this.frame++;
    } else {
      this.roll++
    };

    // call calc frames
    this.calcScores();

  }


  frameRollTotal(frame_num) {
    return this.rolls[frame_num].reduce((sum, val) => sum += val, 0)
  }




  calcScores() {
    for (let i = 0; i < this.rolls.length; i++) {
      if (i === 9) {
        this.frames[9] = this.frameRollTotal(9);
      } else {
        this.frames[i] = this.frameRollTotal(i);

        // if strike or spare add bonuses
        if (this.isStrike(i)) {
          this.frames[i] += this.nextTwoRolls(i).reduce((sum, value) => sum += value, 0);
        } else if (this.isSpare(i)) {
          this.frames[i] += this.nextTwoRolls(i)[0];
        };
      };
    };
    // update total score
    this.total_score = this.frames.reduce((accumulator, value) => accumulator += value, 0)
  }

  nextTwoRolls(index) {
    var following_rolls = this.rolls.slice(index + 1, index + 3).flat();
    return [Number((following_rolls[0] || 0)), Number((following_rolls[1] || 0))]
  }

  isSpare(frameIndex) {
    return (this.frameRollTotal(frameIndex) === 10 && this.rolls[frameIndex].length === 2) ? true : false
  }

  isStrike(frameIndex) {
    return (this.frameRollTotal(frameIndex) === 10 && this.rolls[frameIndex].length === 1) ? true : false
  }

}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Scorecard;
}