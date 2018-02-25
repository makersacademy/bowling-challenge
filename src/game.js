var Game = function() {
  this.scoreCard = [];
  this.frame = [];
  this.currentScore = 0
};

Game.prototype = {

  roll: function(pins) {
    this.scoreCard.push(pins); 
  },

  score: function() {
    var result = 0;
    for (var i = 0; i < 20; i++){
      result += this.scoreCard[i];
    }
    return result;
  }
};

