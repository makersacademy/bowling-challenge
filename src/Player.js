var Player = function() {
  this.points = function() {
    return Scorecard.sum();
  };
};

Player.prototype.notesPinsDown = function(pinsDownNumber) {
  var isStrike = function(pinsDown){
    return pinsDown === 10;
  };

  if(isStrike(pinsDownNumber) === true){
    Scorecard.updateList(pinsDownNumber);
  };

};