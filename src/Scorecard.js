function Scorecard () {
  this.frame = ['x', 0];
  this.framesTotal = 10;
  this.frameLog = [];
  this.frameNumber = 1;
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    if (this.frame[0] === 'x') {
      this.frame[0] = pins;
    } else {
      this.frame[1] = pins;
      this.completeFrame();
    }
  },

  completeFrame: function() {
    this.frameLog.push(this.frame);
    this.frame = ['x', 0];
    this.frameNumber += 1;

  },

  total: function() {
    return this.frameLog.flat().reduce(function(acc, val) { return acc + val; }, 0);
  },

  isComplete: function() {
    if ( this.frameLog.length < this.framesTotal ) {
      return false;
    } else {
      return true;
    }
  },


};
