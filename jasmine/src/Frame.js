function Frame() {
  this.rollTally = [];
}

Frame.prototype = {
  addToFrame: function(roll) {
    this.rollTally.push(roll.pinfall);
  },

  totalPoints: function() {
    var total = 0;
    this.rollTally.forEach(function(pinfall) {
      total += pinfall;
    });
    return total;
  },

  isStrike: function() {
    return this.rollTally[0] === 10;
  },

  isSpare: function() {
    return (this.isStrike() === false) && (this.totalPoints() === 10);
  }
}
