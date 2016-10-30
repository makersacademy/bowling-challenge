function Frame() {
    'use strict';
    this.score1=0
};

Frame.prototype.roll1 = function() {
  return this.score1 = Math.floor((Math.random() * 10) + 1);
};
