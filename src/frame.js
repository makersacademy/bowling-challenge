function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.score = []
};

Frame.prototype.bowl = function(firstBowl, secondBowl) {
  this.score = [firstBowl, secondBowl];
};

Frame.prototype.isAStrike = function() {
  if (this.score[0] == 10){
    return true;
  } else {
    return false;
  };
};


Frame.prototype.isASpare = function() {
  if (this.score[0] + this.score[1] == 10){
    return true;
  } else {
    return false;
  };
};
