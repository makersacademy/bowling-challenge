var TenPin = function(frame) {
  this.newFrame = frame
  this.finalFrame = false;
  this.maxFrame = 10;
  this.currentFrame = 0;
  this.framesCreated = [];
  this.createFrame(this.newFrame);
};

TenPin.prototype.isFinalFrame = function(frame) {
  if ((this.currentFrame + 1) == this.maxFrame){
    return true
  }else{
    return false
  }
}

TenPin.prototype.createFrame = function(frame) {
  this.framesCreated[this.currentFrame] = new frame
}

TenPin.prototype.frameFirstRoll = function(roll1) {
  this.framesCreated[this.currentFrame].setRollOneScore(roll1)
};

TenPin.prototype.frameSecondRoll = function(roll2) {
  this.framesCreated[this.currentFrame].setRollTwoScore(roll2)
};

TenPin.prototype.moveToNextFrame = function() {
  this.currentFrame += 1
};

TenPin.prototype.checkForSpare = function(roll1, roll2) {
  if (roll1.getPinsHit() + roll2.getPinsHit() == 10){
    return true
  }else{
    return false
  };
};

TenPin.prototype.checkForStrike = function(roll1) {
  if (roll1.getPinsHit() == 10){
    return true
  }else{
    return false
  };
};

TenPin.prototype.frameSetters = function(roll1, roll2) {
  this.frameFirstRoll(roll1);
  this.frameSecondRoll(roll2);
};

TenPin.prototype.standardFrame = function(roll1, roll2) {
  this.frameSetters(roll1, roll2);
  this.createMoveFrame()
};

TenPin.prototype.createMoveFrame = function() {
  this.moveToNextFrame();
  this.createFrame(this.newFrame);
};

TenPin.prototype.playSpare = function(roll1, roll2) {
  if ( this.isFinalFrame() == false ) {
    this.frameSetters(roll1, roll2);
    this.createMoveFrame()
    this.framesCreated[this.currentFrame - 1].setBonusRollIndex(this.currentFrame)
  }else{
    this.playBonusLast(roll1, roll2, rollBonus)
  }
};

TenPin.prototype.playStrike = function(roll1, roll2, rollBonus) {
  if ( this.isFinalFrame() == false ) {
    this.frameFirstRoll(roll1);
    this.createMoveFrame()
    this.framesCreated[this.currentFrame - 1].setRollTwoIndex(this.currentFrame)
    this.framesCreated[this.currentFrame - 1].setBonusRollIndex(this.currentFrame)
  }else{
    this.playBonusLast(roll1, roll2, rollBonus)
  }
};

TenPin.prototype.updateScores = function() {
  for(var i = 0; i < this.framesCreated.length; i++) {
    this.rollTwoUpdate(i)
    this.bonusRollUpdate(i)
  };
};

TenPin.prototype.rollTwoUpdate = function(index) {
  if (this.framesCreated[index].getRollTwoIndex() > index){
    this.framesCreated[index].setRollTwoScore(this.framesCreated[this.framesCreated[index].getRollOneIndex()].getRollOneScore())
  };
};

TenPin.prototype.bonusRollUpdate = function(index) {
  if (this.framesCreated[index].getBonusRollIndex() > index && this.framesCreated[index].getRollTwoIndex() > index){
    this.framesCreated[index].setBonusRollScore(this.framesCreated[this.framesCreated[index].getBonusRollIndex()].getRollTwoScore())
  }else if ( this.framesCreated[index].getBonusRollIndex() > index ){
    this.framesCreated[index].setBonusRollScore(this.framesCreated[this.framesCreated[index].getBonusRollIndex()].getRollOneScore())
  };
};

TenPin.prototype.playFrame = function(roll1, roll2, rollBonus) {
  if ( this.checkForStrike(roll1) == true ) {
    this.playStrike(roll1)
  }else if ( this.checkForSpare(roll1, roll2) == true ) {
    this.playSpare(roll1, roll2)
  }else{
    this.standardFrame(roll1, roll2)
  };
};

TenPin.prototype.playBonusLast = function(roll1, roll2, rollBonus){
  this.framesCreated[this.currentFrame].setRollOneScore(roll1)
  this.framesCreated[this.currentFrame].setRollTwoScore(roll2)
  this.framesCreated[this.currentFrame].setBonusRollScore(rollBonus)
}

