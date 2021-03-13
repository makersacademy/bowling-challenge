"use strict";

class BowlingGame{

  constructor(){
  this.score_card = 0;
  };

  bowl = function(pins) {
    this.score_card += pins;
  };

  score = function() {
    return this.score_card;
  };
};
