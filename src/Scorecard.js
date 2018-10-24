class Scorecard {

  constructor() {
    this.frame = [];
    this.frameScore = 0
    this.frameNumber = 0
    this.allRolls = [];
    this.rollNumber = 0
    this.allFrames = [];
    this.cumulativeScore = 0;
  }

  roll(roll) {
    this.rollnumber += 1
    if(roll > 10 || roll + this.frameScore > 10){
      throw new Error("There is a maximum of 10 pins per frame");
    }
    else{
      this.cumulativeScore += roll;
      this.frame.push(roll);
      this.frameScore += roll;
      if(this.frame.length === 1 && this.allFrames === 9 || this.allFrames === 10){
        frameTen();
      }
      else{
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
        this.allRolls.push(roll);
        if(roll === 10 && this.frame.length === 1){
          this.strike();
          this.endFrame();
        }
        else if(this.frame.length === 2){
          if(this.frameScore === 10){
            this.spare();
            this.endFrame();
          }
          else{
            this.endFrame();
          };
        };
      };
    };
  };
  endFrame() {
    this.allFrames.push(this.frame);
    this.frame = [];
    this.frameScore = 0;
  };

  spare() {
    this.sparebonus = 1;
  };

  strike() {
    if(this.strikebonus > 0){
      this.strikebonus2 = 2
    }
    else{
      this.strikebonus = 2;
    };
  };

  frameTen() {
    if(roll === 10 && this.frame.length === 1){
      this.strike();
    }
    else if(this.frame.length === 2 && this.frameScore === 10){
      this.spare();
    };
  };

  // Spechelper

  repeat(pins, number){
    var times = number;
    for(var i=0; i < times; i++){
      this.roll(pins);
    };
  };
};
