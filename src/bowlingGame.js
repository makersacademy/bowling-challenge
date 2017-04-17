(function () {
   'use strict';
}());

function BowlingGame() {
  this.frames = [];
  for (var i = 0; i < 10 ; i++) {
    this.frames.push(new Frame());
  }

  this.total = 0;
  this.firstScore = 0;
  this.spare = false
}

BowlingGame.prototype.firstShot = function(pins) {
  this.frames[0].firstShotScore = pins;
}

BowlingGame.prototype.secondShot = function(pins) {
  this.frames[0].secondShotScore = pins;
  if(this.frames[0].firstShotScore + this.frames[0].secondShotScore === 10) {
    this.spare = !this.spare;
  }
}

