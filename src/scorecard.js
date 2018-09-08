'use strict';

function Scorecard() {
	this.frames = []
};

Scorecard.prototype = {
  addFrame: function(frame) {
    this.frames.push(frame);
  }
};
