var TenPin = function(frame) {
  this.newFrame = frame
  this.FRAMES = 10;
  this.currentFrame = 0;
  this.framesCreated = [];
  this.createFrame(this.newFrame);
};

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
  }

  TenPin.prototype.checkForSpare = function(roll1, roll2) {
    if (roll1.getPinsHit() + roll2.getPinsHit() == 10){
      return true
    }else{
      return false
    }
  }

  TenPin.prototype.frameSetters = function(roll1, roll2) {
    this.frameFirstRoll(roll1);
    this.frameSecondRoll(roll2);
  }

  TenPin.prototype.plainFrame = function(roll1, roll2) {
    this.frameSetters(roll1, roll2);
    this.moveToNextFrame();
  }

  TenPin.prototype.createMoveFrame = function() {
    this.moveToNextFrame();
    this.createFrame(this.newFrame);
  }

  TenPin.prototype.playSpare = function(roll1, roll2){
    this.frameSetters(roll1, roll2);
    this.createMoveFrame()
    this.framesCreated[this.currentFrame - 1].setBonusRollScore(this.framesCreated[this.currentFrame].getRollOneScore())
  }

  TenPin.prototype.playFrame = function(roll1, roll2) {
    if (this.checkForSpare(roll1, roll2) == true ){
        this.playSpare(roll1, roll2)
      }else{
        this.plainFrame(roll1, roll2)
    }
  }


