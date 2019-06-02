/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
let Game = function () {
  this.frames = [];
};

Game.prototype.roll = function (roll) {
  let frame = new Frame(roll);
  this.frames.push(frame);
};

Game.prototype.score = function () {
  return this.frames.reduce(function (score, frame, index, frames) {
    return score + frame.total(frames[index + 1], frames[index + 2]);
  }, 0);
};
