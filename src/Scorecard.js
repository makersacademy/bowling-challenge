function Scorecard () {
  this.frame = ['a', 'b'];
  this.framesTotal = 10;
  this.frames = [];
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    if (this.frame[0] === 'a') {
      this.frame[0] = pins;
    } else {
      this.frame[1] = pins;
      this.completeFrame();
    }
  },

  completeFrame: function() {
    this.frames.push(this.frame);
    this.frame = ['a', 'b'];
  },

  total: function() {
    return this.frames.flat().reduce(function(acc, val) { return acc + val; }, 0)
  },

  isComplete: function() {
    if ( this.frames.length < this.framesTotal ) {
      return false;
    } else {
      return true;
    }
  }

}
