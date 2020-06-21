'use strict';

class BowlingGame {
  constructor() {
    this.rolls = [];
  }

   roll(downPins) {
     this.rolls.push(downPins);
   }

   score() {
     var array = this.rolls
     var total = array.reduce(function(a, b) {
       return a + b;
       }, 0);
     return total; 
   }

}