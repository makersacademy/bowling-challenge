BowlingGame = function(){
  this.currentFrame;
  this.scoreCard = [];
  this.freshFrames = [];
};

BowlingGame.prototype.roll = function(pins) {
  if(this.currentFrame == undefined){
    this.nextFrame();
    this.currentFrame.saveRoll(pins);
  }else{
    this.currentFrame.saveRoll(pins);
    this.finishFrame();
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
  }

};


BowlingGame.prototype.nextFrame = function () {
  this.currentFrame = this.freshFrames.shift();
};
