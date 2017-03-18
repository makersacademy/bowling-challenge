'use strict';

function Frame(){
  this.totalFrame = [];
};

Frame.prototype.inputScore = function (bowl1, bowl2 = 0) {
  return this.totalFrame.push([bowl1, bowl2]);
};
