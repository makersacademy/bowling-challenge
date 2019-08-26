"use strict";

function Bowling() {
  this.score = []

}

Bowling.prototype.roll = function (pins) {
  this.score.push(pins)
}

Bowling.prototype.result = function () {
  return this.score.reduce((a, b) => a + b)

};

