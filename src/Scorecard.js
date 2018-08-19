function Scorecard() {
  this.frame = [];
  this.frameScore = 0
  this.allRolls = [];
  this.rollNumber = 0
  this.allFrames = [];
  this.cumulativeScore = 0;
};

Scorecard.prototype.roll = function(roll) {
  this.rollnumber += 1
  if(roll > 10 || roll + this.frameScore > 10){
    throw new Error("There is a maximum of 10 pins per frame");
  }
  else{
    this.cumulativeScore += roll;
    this.frame.push(roll);
    if(this.strikebonus > 0){
      this.cumulativeScore += roll;
      this.strikebonus -=1;
    };
    if(this.strikebonus2 > 0){
      this.cumulativeScore += roll;
      this.strikebonus2 -=1;
    };
    if(this.sparebonus > 0){
      this.cumulativeScore += roll;
      this.sparebonus -= 1;
    };
    this.frameScore += roll;
    this.allRolls.push(roll);
    if(roll === 10 && this.frame.length === 1){
      this.strike();
      this.endFrame();
    }
    else if(this.frame.length === 2){
      if(this.frameScore === 10){
        console.log("Spare!!!");
        this.spare();
        this.endFrame();
      }
      else{
        this.endFrame();
      };
    };
  };
};

Scorecard.prototype.endFrame = function(){
  this.allFrames.push(this.frame);
  this.frame = [];
  this.frameScore = 0;
};

Scorecard.prototype.spare = function(){
  this.sparebonus = 1;
};

Scorecard.prototype.strike = function(){
  if(this.strikebonus > 0){
    this.strikebonus2 = 2
  }
  else{
    this.strikebonus = 2;
  };
};
