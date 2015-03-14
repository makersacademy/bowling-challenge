BowlingGame = function(){
  this.currentFrame;
  this.scoreCard = [];
  this.freshFrames = [];
  this.bonusFrame = [];
  this.isOver = false;
  this.isFinalRound = false;
};


BowlingGame.prototype.roll = function(pins) {
  if(this.isFinalRound){this.rollFinal(pins)}
  else {
    if(this.currentFrame == undefined){
      this.nextFrame();
      console.log(this.currentFrame)
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
  if(this.freshFrames.length == 0){
    this.isOver = true;}
var  index = this.scoreCard.length-1
  console.log(this.scoreCard[index].rolls);
};

BowlingGame.prototype.rollFinal = function (pins) {
  console.log("FINALE ohohohoh")
};
