'use strict';

function Score() {

  this.scorecard = []
  this.frame_running_totals = []

}

function Game() {

  this._frames = [ new Frame, new Frame, new Frame, new Frame, new Frame,
    new Frame, new Frame, new Frame, new Frame,  new Frame,]
  this.user_input = null
  frames_remaining = 10

};

function Frame() {
  this._throws = []
  this.is_complete = false
};

// Game.prototype.start = function () {
//   this._frames.forEach (function (frame, index) {
//     frame.throw_one(receive_user_input())
//     if (throw_one === 10) {
//       return
//     } else {
//
//       frame.throw_two(receive_user_input())
//     }
//
//   })
// };

Game.prototype.throw = function (user_input) {

  this.frames_remaining =- 1

  if (user_input === 10) {
    return
  }

};

Game.prototype.receive_user_input = function () {
  return this.user_input

};

Game.prototype.set_user_input = function (user_input) {
  return this.user_input = user_input
};
