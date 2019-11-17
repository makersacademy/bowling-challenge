'use strict';

function Game() {
  this.frame_holder = []
};

var frame_item

Game.prototype.loadFrame = function(frame_item) {
  this.frame_holder.push(frame_item);
  return('ok');
};
