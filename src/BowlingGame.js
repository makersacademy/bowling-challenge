BowlingGame = function(){
  this.currentFrame;
  this.scoreCard = [];
};

BowlingGame.prototype.roll = function(pins) {
  if(this.currentFrame == undefined){
    this.currentFrame = new BowlingFrame(pins);
  }else{
    this.currentFrame.saveRoll(pins);
    this.finishFrame();
  };
};


BowlingGame.prototype.finishFrame = function() {
  this.scoreCard.push(this.currentFrame)
  this.currentFrame = undefined;
};
