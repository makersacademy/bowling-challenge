"use strict";

function Roll() {
  this.score= 0;
}

Roll.prototype.bowl = function(maxvalue) {
      this.score = this.randomNumberGenerator(maxvalue)
};

Roll.prototype.randomNumberGenerator = function(maxvalue) {
  return Math.floor(Math.random() * (maxvalue))
}
