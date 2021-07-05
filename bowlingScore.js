'use strict';

function Scorer() {
  this.pins = [[]]
  this.scores = [[]]
  this.currentFrame = 0
};

Scorer.prototype.insert = function(number) {
  if (this.pins[this.currentFrame].length < 2 && this.pins[this.currentFrame][0] !== 10) {
    this.pins[this.currentFrame].push(number)

    if (this._unzerofy() === 10) {
      this.scores[this.currentFrame - 1].push(number);
      this.scores[this.currentFrame].push(number);
    }
    else {
      this.scores[this.currentFrame].push(number);
    }
  }

  else {
    this.pins.push([number])
    this.scores.push([number])
    this.spareOrStrike(number)
    this.currentFrame++;
  }
}

Scorer.prototype.totalScore = function () {
  var scores = this.scores.map(function(frame) {
    return frame.reduce(function(sum, value) {
      return sum + value;
    });
  });
  return scores.reduce(function(sum, value) {
    return sum + value;
  });
}

Scorer.prototype.scoreOfCurrentFrame = function () {
  return this.scores[this.currentFrame].reduce(function (sum, value) {
    return sum + value;
  })
}

Scorer.prototype.spareOrStrike = function (number) {
  if (this.scoreOfCurrentFrame() == 10 && this.pins[this.currentFrame][0] !== 10) {
    this.scores[this.currentFrame].push(number)
  }
  else if (this.scoreOfCurrentFrame() == 10 || this.pins[this.currentFrame][0] === 10) {
    if (this._unzerofy() === 10) {
      this.scores[this.currentFrame - 1].push(number);
      this.scores[this.currentFrame].push(number);
      this.scores.push[number];
    }
    else {
    this.scores[this.currentFrame].push(number);
    this.scores.push[number];
    }
  }
}

Scorer.prototype._unzerofy = function() {
  if (this.currentFrame === 0) {
    return this.pins[this.currentFrame - 1]
  }
  else {
    return this.pins[this.currentFrame - 1][0]
  }
}

