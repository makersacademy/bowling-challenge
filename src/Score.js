class Score {
  constructor(){
    this.frames = 0;
  }
 
  scoring(x) {
    var score = 0 
    var frameIndex = 0
    var next = 0
    var next2 = 0
    
    
    for(var frame = 0; frame < 10; frame++){
      if(this.isStrike(x.rolls[frameIndex])){
        next = x.rolls[frameIndex + 1]
        next2 = x.rolls[frameIndex + 2]
        score += 10 + next + next2

        frameIndex ++ 
      }
      else if (this.isSpare(x.rolls[frameIndex], x.rolls[frameIndex + 1])){
        next2 = x.rolls[frameIndex + 2]
        score += 10 + next2 
        
        frameIndex += 2
      }
      else{
        score += x.rolls[frameIndex] + x.rolls[frameIndex + 1]; 

        frameIndex += 2 
      }
    }
    this.frames ++
    return score 
  };
  
  isStrike(roll) {
    return roll === 10;
  };

  isSpare(roll, roll2) {
    return roll + roll2 === 10
  };
};

