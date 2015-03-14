A Bowling score card.

## Ways the game can end
- All fresh frames gone. No strike or spare in the 10th frame.
- spare in the 10th frame: One bonus roll (no matter if bonus roll is a strike or not.)
- strike in the 10th frame. Complete bonus frame with two rolls. Both could be strikes without effect.


##ways to implement the final round:

normal:

- if currentFrame doesn't exist{
  currentFrame = freshFrames.shift()
  currentFrame.saveRoll(pins)
}else{
  this.currentFrame.saveRoll(pins);
  this.scoreCard.push(this.currentFrame)
  this.currentFrame = undefined;
}


FinalRound:

if(this.isStrike(pins) && this.scoreCard.length => 10){
    this.finalRound = true
  }else if(this.isSpare(this.currentFrame) && this.scoreCard.length => 10){
    this.finalRound = true
    this.freshFrames = this.bonusFrame;
  };


finalRoll:
if(isStrike(pins)){
  if(this.currentFrame == undefined){
    this.nextFrame();
    this.currentFrame.saveRoll(pins);
  }else{
    this.currentFrame.saveRoll(pins);
    this.isOver = true;
  };
}else{
  this.nextFrame();
  this.currentFrame.saveRoll(pins);
  this.finishFrame()
  this.isOver = true;
}
