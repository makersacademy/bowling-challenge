function Scorecard() {
  this.frame = [];
  this.frameScore = 0
  this.allRolls = [];
  this.allFrames = [];
  this.allFramesScore = [];
  this.score = 0
};

Scorecard.prototype.roll = function(roll) {
  if(roll > 10 || roll + this.frameScore > 10){
    throw new Error("There is a maximum of 10 pins per frame");
  }
  else{
    this.frame.push(roll);
    this.frameScore += roll;
    this.allRolls.push(roll);
    this.score += roll;
    if(roll === 10){
      this.endFrame();
    }
    else if(this.frame.length === 2){
      this.endFrame();
    }
  };
};

Scorecard.prototype.endFrame = function(){
  this.allFrames.push(this.frame);
  this.frame = [];
  this.frameScore = 0;
};
