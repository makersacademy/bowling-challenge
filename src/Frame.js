function Frame() {
  this.score = 0
  this.bowl = 1
}

Frame.prototype = {
  getScore: function() {
    return this.score
  }, 
  roll: function(pins) {
    this.score += pins
  },
  isStrike: function() {
    return this.bowl === 1 && this.score === 10
  }

};
