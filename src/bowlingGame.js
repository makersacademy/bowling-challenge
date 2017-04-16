(function () {
   'use strict';
}());

function BowlingGame() {
  this.frames = [];
  for (var i = 0; i < 10 ; i++) {
    this.frames.push(new Frame());
  }
}