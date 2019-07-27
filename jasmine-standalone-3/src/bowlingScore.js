'use strict';

function Scorer() {
  this.points = []
}
Scorer.prototype.showPoint = function(number) {
  return number;
};
Scorer.prototype.insert = function(number) {
  this.points.push(number);
};
Scorer.prototype.points = function() {
  return this.points;
};
