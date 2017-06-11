"use strict";

function Frame() {
  this.score = 0
}

Frame.prototype.bowl = function(){
  this.score += 10;
  return 'You bowled a ball'
}
