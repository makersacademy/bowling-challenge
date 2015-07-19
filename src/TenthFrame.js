var Frame = function() {
  this.rollsRemaining = 3;
  this.scoreRecord = [];
};

Frame.prototype.roll = function(numberOfPins) { 
  if (!this.isInProgress()) {throw 'the frame is complete'}; 

  if (this.isStrike()) {
    this.rollsRemaining += 1;
  };

  if (this.scoreRecord.length == 1 && (numberOfPins + this.scoreRecord[0]) == 10) {
    this.rollsRemaining += 1;
  };

  this.scoreRecord.push(numberOfPins);
  this.rollsRemaining -= 2;

};

Frame.prototype.totalScoreWithBonus = function() {          
  return this.totalScore() + this.totalBonus();
};

Frame.prototype.totalScore = function() {  
  if (this.scoreRecord.length == 0) {return 0};

  if (this.isStrike()) {return 10};

  return this.scoreRecord.slice(0,2).reduce(function(first, second){
    return first + second;
  });
};

Frame.prototype.totalBonus = function() {  
  if (this.isInProgress()) {return 0};

  if (this.isStrike()) {
    return this.scoreRecord.slice(-2).reduce(function (first, second){
      return first + second;
    });
  };

  if (this.isSpare()) {
    return this.scoreRecord.slice(-1)[0];
  };

  return 0;
};

Frame.prototype.isInProgress = function() {
  return (this.rollsRemaining > 0);
};

Frame.prototype.isStrike = function(first_argument) {
  return (this.scoreRecord[0] == 10);
};

Frame.prototype.isSpare = function(first_argument) {
  if (this.scoreRecord.length == 0) {return false};

  var total = this.scoreRecord.slice(0,2).reduce(function(first, second){
    return first + second;
  });

  return (total == 10 && this.scoreRecord.length > 1);
};



