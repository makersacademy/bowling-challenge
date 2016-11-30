'use strict';

function Bowl () {
  this.score = 0;
  this.hitsPins = 0;
}

Bowl.prototype.roll = function(){
  this.hitsPins = Math.floor(Math.random()*11);
};

Bowl.prototype.getPins = function() {
  return this.hitsPins;
};
