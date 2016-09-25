var Frame = function(pins){
  this.pins = pins;
};

Frame.prototype = {
  score: function(){
    return this.pins.reduce(function(score, pin){
      return score + pin;
    });
  }
};

module.exports = Frame;
