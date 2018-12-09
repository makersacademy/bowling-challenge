'use strict';

function Game(){
  this.currentFrame = 1;
  this.score = 0;
  this.frames = [];
};

function Frame(){
  this.pinsUp = 10;
};

Frame.prototype.bowl = function (pins) {
  this.pinsUp -= pins;
};
