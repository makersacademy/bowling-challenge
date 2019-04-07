function Scorecard () {
  this.frame = ['x', 0];
  this.framesTotal = 10;
  this.frameLog = [];
  this.frameNumber = 1;
  this.bonus = 0;
  this.score = 0;
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    if (this.frame[0] === 'x') {
      this.frame[0] = pins;
      if ( isStrike(this.frame) ) { this.completeFrame(); }
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
    var potentialStrike = this.frameLog[this.frameNumber - 3]
    if ( isStrike(potentialStrike) ) {
      this.bonus += this.strikeBonus()
    }
    return this.bonus + this.frameLog.flat().reduce(function(acc, val) { return acc + val; }, 0);
  },

  isComplete: function() {
    if ( this.frameLog.length < this.framesTotal ) {
      return false;
    } else {
      return true;
    }
  },

  strikeBonus: function() {
    var previousFrame = this.frameNumber - 2
    return this.frameLog[previousFrame].reduce(function(acc, val) { return acc + val; }, 0)
  }

};

function isStrike(frame) {
  if ( frame === undefined || frame[0] !== 10 ) {
    return false
  } else {
    return true
  }
}
