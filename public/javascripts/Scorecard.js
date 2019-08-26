'use strict;'
var Scorecard = function () {
  this.roll = 0;
  this.frame = 0;
  this.rolls = []
  for (var i = 0; i < 10; i++) {
    this.rolls.push([])
  };
  this.frames = []
  for (var i = 0; i < 10; i++) {
    this.frames.push(0)
  };
  this.total_score = 0
}

Scorecard.prototype = {
  addRoll: function (score) {
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

  },

  frameRollTotal: function (frame_num) {
    if (!(0 <= frame_num && frame_num <= 9)) {
      return 0
    }
    return this.rolls[frame_num].reduce((sum, val) => sum += val, 0)
  },

  followingRolls: function (index) {
    var following_rolls = this.rolls.slice(index + 1, index + 3).flat()
    return [Number((following_rolls[0] || 0)), Number((following_rolls[1] || 0))]
  },

  calcScores: function () {
    var frames = []

    this.rolls.forEach(
      function (element, index, array) {

        if (index === 9) { // frame ten just need to sum values. Logic on if roll can be taken is done in add roll
          frames[9] = this.frameRollTotal(9);
        } else {
          frames[index] = this.frameRollTotal(index);

          // if strike
          if ((element[0] || 0) === 10) {
            frames[index] += this.followingRolls(index)[0] + this.followingRolls(index)[1];
          } else if (this.frameRollTotal(index) === 10) {
            frames[index] += this.followingRolls(index)[0];
          };

        };
      }, this);

    this.frames = frames
    this.total_score = frames.reduce((accumulator, value) => accumulator += value, 0)
  },
};