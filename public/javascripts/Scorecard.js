'use strict;'
var Scorecard = function () {
  this.roll = 1;

  this.frame = 1;

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
  add_roll: function (score) {

    this.rolls[this.frame - 1].push(score)

    if (this.frame === 10) { // last normal roll of tenth frame
      if (this.roll === 1) {
        this.roll++;
      } else if (this.roll === 2 && (this.rolls[this.frame - 1][0] + this.rolls[this.frame - 1][1]) >= 10) { // do you need a bonus roll?
        this.roll++;
      } else {
        this.roll = undefined;
        this.frame = undefined;
      };
      // now deal with strikes or non strikes as normal
    } else if (this.roll === 2 || score === 10) {
      this.roll = 1;
      this.frame++;
    } else {
      this.roll++
    };

    // call calc frames
    this.calc_scores();

  },

  calc_scores: function () {
    var frames = []
    this.rolls.forEach(
      function (element, index, array) {

        if (index === 9) {
          frames[9] = (element[0] || 0) + (element[1] || 0) + (element[2] || 0);
        } else {
          frames[index] = ((element[0] || 0) + (element[1] || 0))

          // if strike
          var following_rolls = array.slice(index + 1, index + 3).flat();
          if ((element[0] || 0) === 10) {
            frames[index] += (following_rolls[0] || 0) + (following_rolls[1] || 0)
          } else if ((element[0] || 0) + (element[1] || 0) === 10) {
            frames[index] += (following_rolls[0] || 0)
          };

        };
      });
    this.frames = frames
    this.total_score = frames.reduce((accumulator, value) => accumulator += value, 0)
  },

};