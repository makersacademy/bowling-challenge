'use strict';

class BowlingGame {
  constructor() {
    this.rolls = [];
    this.pins = 10
  }

   roll(downPins) {
     this.rolls.push(downPins);
     this.pins -= downPins;
   }

   score() {
     var array = this.rolls
     var total = array.reduce(function(a, b) {
       return a + b;
       }, 0);
     return total; 
   }
}