function Frame() {
  this.score = 0
};

Frame.prototype.firstBowl = function(pins){
  this.score = this.score + pins
};

Frame.prototype.secondBowl = function(pins){
  if (this.score < 10){
  this.score = this.score + pins
} else {
    this.score = this.score
  };
};
