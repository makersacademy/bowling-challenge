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
  if (pins > this.pinsUp) { throw new Error ('Too many pins!'); }
  this.pinsUp -= pins;
};
