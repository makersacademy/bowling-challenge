'use strict';

function Bowling() {
  this.score = [];
}

Bowling.prototype.roll = function(one,two) {
  var arr = [one, two];
  this.score.push(arr);
};
