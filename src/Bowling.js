'use strict';

function Bowling() {
  this.score = {};
}

Bowling.prototype.roll = function(k,v) {
  this.score[k] = v;
};
