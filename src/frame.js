function Frame(rack){

  this.rack = rack

  Frame.prototype.bowlBall = function() {

  };

  Frame.prototype.getScore = function(){
    return 10 - this.rack.getStandingPinsAmount();
  };


};
