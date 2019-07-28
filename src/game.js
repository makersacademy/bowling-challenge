'use strict';

function Game() {

  this._frames = []
  this.scorecard = []
  this.frame_running_totals = []
  this.running_total = 0

};

Game.prototype.receive_frame = function (frame) {
  this._frames.push(frame)
};
