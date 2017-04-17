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
}

BowlingGame.prototype.firstShot = function(pins) {
  this.frames[0].firstShotScore = pins;

}

