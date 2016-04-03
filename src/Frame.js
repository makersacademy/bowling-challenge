'use strict';

function Frame(){
  this.round = [];
  this.score = 0;
  this.pins = 10;
  this.ballsRolled = 0;
}

Frame.prototype.bowl = function(pins) {
  this.score += pins;
  this.round.push(pins);
  this.pins -= pins;
  this.ballsRolled += 1;
}
