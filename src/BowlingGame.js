BowlingGame = function(){
  this.currentFrame;
  this.scoreCard = [];
  this.freshFrames = [];
  this.bonusFrame = [];
  this.isOver = false;
  // this.isFinalRound = false;
};



BowlingGame.prototype.roll = function(pins) {
  if(this.isFinal()){this.rollFinal(pins)}
  else {
    if(this.currentFrame == undefined){
      this.nextFrame();

      this.currentFrame.saveRoll(pins);
      if(this.isStrike(pins)){this.finishFrame()};
    }else{
      this.currentFrame.saveRoll(pins);
      this.finishFrame();
    };
    this.checkIfOver();
  };
};


BowlingGame.prototype.finishFrame = function() {
  this.scoreCard.push(this.currentFrame)
  this.currentFrame = undefined;

};

BowlingGame.prototype.hold = function (frame) {
  if(Array.isArray(frame))
    {for(i=0; i<frame.length; i++){this.freshFrames.push(frames[i])};
  }else{
  this.freshFrames.push(frame);
  };
};


BowlingGame.prototype.nextFrame = function () {
  this.currentFrame = this.freshFrames.shift();
};


BowlingGame.prototype.isStrike = function (pins) {
  return pins == 10;
};

BowlingGame.prototype.holdBonusFrame = function (frame) {
  this.bonusFrame.push(frame);
};


BowlingGame.prototype.checkIfOver = function () {
  index = this.scoreCard.length-1;
  if(this.freshFrames.length == 0 && this.scoreCard[index].rolls.length == 2){
    this.isOver = true;}
};

BowlingGame.prototype.rollFinal = function (pins) {
  if(this.isStrike(pins)){
    if(this.currentFrame == undefined){
      this.nextFrame();
      this.currentFrame.saveRoll(pins);
    }else{
      this.currentFrame.saveRoll(pins);
      this.finishFrame()
      this.isOver = true;
    };
  }else{
    this.nextFrame();
    this.currentFrame.saveRoll(pins);
    this.finishFrame()
    this.isOver = true;
  };
};

BowlingGame.prototype.isFinal = function () {
  if(this.scoreCard.length == 10 && this.scoreCard[9].spare){
    this.freshFrames = this.bonusFrame;
    return true
  }else if(this.scoreCard.length == 10 && this.scoreCard[9].strike){
    this.freshFrames = this.bonusFrame;
    return true
  }else{ return false };
};
