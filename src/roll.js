"use strict";

function Roll() {
  this.score= 0;
}

Roll.prototype.bowl = function(maxvalue) {
     this.score = Math.floor(Math.random() * (maxvalue))
};
