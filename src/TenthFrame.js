var TenthFrame = function() {
  this.rollsRemaining = 2;
  this.scoreRecord = [];
};

TenthFrame.prototype.roll = function(numberOfPins) { 
  if (!this.isInProgress()) {throw 'the frame is complete'}; 

  if (this.scoreRecord.length == 0 && numberOfPins == 10) {
    this.rollsRemaining += 1;
  };

  if (!this.isStrike() && this.scoreRecord.length == 1 && (numberOfPins + this.scoreRecord[0]) == 10) {
    this.rollsRemaining += 1;
  };

  this.scoreRecord.push(numberOfPins);
  this.rollsRemaining --;
};

TenthFrame.prototype.totalScoreWithBonus = function() {          
  return this.totalScore() + this.totalBonus();
};

TenthFrame.prototype.totalScore = function() {  
  if (this.scoreRecord.length == 0) {return 0};

  if (this.isStrike()) {return 10};

  return this.scoreRecord.slice(0,2).reduce(function(first, second){
    return first + second;
  });
};

TenthFrame.prototype.totalBonus = function() {  
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

TenthFrame.prototype.isInProgress = function() {
  return (this.rollsRemaining > 0);
};

TenthFrame.prototype.isStrike = function(first_argument) {
  return (this.scoreRecord[0] == 10);
};

TenthFrame.prototype.isSpare = function(first_argument) {
  if (this.scoreRecord.length == 0) {return false};

  var total = this.scoreRecord.slice(0,2).reduce(function(first, second){
    return first + second;
  });

  return (total == 10 && !this.isStrike());
};



