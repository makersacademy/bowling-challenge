class Score {
  
  scoring = function(x) {
    var score = 0 
    var frameIndex = 0
    var next = 0
    var next2 = 0
    
    for(var frame = 0; frame < 10; frame++){

      if(x.rolls[frameIndex] === 10){
        next = x.rolls[frameIndex + 1]
        next2 = x.rolls[frameIndex + 2]
        score += 10 + next + next2

        frameIndex ++ 
      }
      else if ((x.rolls[frameIndex] + x.rolls[frameIndex + 1]) === 10){
        next2 = x.rolls[frameIndex + 2]
        score += 10 + next2 

        frameIndex += 2
      }
      else{
        score += x.rolls[frameIndex] + x.rolls[frameIndex + 1];
                
        frameIndex += 2
      }
    }
    
    return score 
  };
};


