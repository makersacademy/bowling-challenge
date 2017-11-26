
function Round() {
  this.pinsDown = 0 ;
};

Round.prototype.bowl = function(pins){
  this.pinsDown += pins;
};
