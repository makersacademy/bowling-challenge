var Frame = function() {
  this.rollsRemaining = 2;
  this.scoreRecord = [];
  this.bonusRecord = [];
};

Frame.prototype.roll = function(numberOfPins) {         
  if (!this.isInProgress()) {throw 'the frame is over'}  

  if (numberOfPins == 10) {
    this.rollsRemaining -= 2;
  };

  this.scoreRecord.push(numberOfPins);
  this.rollsRemaining --;
};

Frame.prototype.totalScoreWithBonus = function() {         
 return this.totalScore() + this.totalBonus();
};

Frame.prototype.totalScore = function() {   
  if (this.scoreRecord.length == 0) {return 0};

  return this.scoreRecord.reduce(function(first, second) {
    return first + second;
  });
};

Frame.prototype.totalBonus = function() {  
  if (this.bonusRecord.length == 0) {return 0};
                  
  return this.bonusRecord.reduce(function(first, second) {
    return first + second;
  });
};

Frame.prototype.isInProgress = function() {
  return (this.rollsRemaining > 0);
};

Frame.prototype.isStrike = function(first_argument) {
  return (this.totalScore() == 10 && this.scoreRecord.length == 1);
};

Frame.prototype.isSpare = function(first_argument) {
  return (this.totalScore() == 10 && this.scoreRecord.length == 2);
};


