"use strict";

class BowlingGame{

  constructor(){
  this.score_card = 0;
  };

  bowl = function(pins) {
    if(pins === 11) {
      return 'Invalid score, please try again.';
    }
    else this.score_card += pins;
  };

  score = function() {
    return this.score_card;
  };
};
