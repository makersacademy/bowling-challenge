function Frame() {
  this.score = 0
}

Frame.prototype = {
  getScore: function() {
    return this.score
  }, 
  roll: function(pins) {
    this.score += pins
  }

};
