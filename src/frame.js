'use strict';

function Frame(firstroll, secondroll) {
  this.rolls =[firstroll, secondroll];
};

var output

Frame.prototype.getScore = function() {
  output = this.rolls[0] + this.rolls[1]
  return (output);
};

Frame.prototype.getBonus = function() {
  if (this.getScore() != 10) {
    return('nil');
  } else if (this.rolls[0] != 10) {
    return('spare');
  } else {
    return('strike');
  }
};
