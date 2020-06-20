'use strict';

class BowlingGame {
  constructor() {
    this.frame = [];
  }

    roll(pins) {
      this.frame.push(pins);
    }

    score() {
        var array = this.frame
        var total = array.reduce(function(a, b) {
            return a + b;
        }, 0);
        return total; 
    }
}