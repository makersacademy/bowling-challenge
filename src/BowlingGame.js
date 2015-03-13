BowlingGame = function(){
  this.currentFrame;
  this.scoreCard = [];
  this.freshFrames = [];
  this.bonusFrame = [];
  this.isOver = false;
};


BowlingGame.prototype.roll = function(pins) {
  if(this.currentFrame == undefined){
    this.nextFrame();
    this.currentFrame.saveRoll(pins);
    if(this.isStrike(pins)){this.finishFrame()};
    if(this.isStrike(pins) && this.scoreCard.length == 10){
      this.freshFrames = this.bonusFrame};
  }else{
    this.currentFrame.saveRoll(pins);
    this.finishFrame();
  };
  this.checkIfOver();
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
  }

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
  if(this.freshFrames.length == 0){
    this.isOver = true;}
};
