class Score {
  
  scoring = function(x) {
    var score = 0 
    var frameIndex = 0
    var next = 0
    var next2 = 0
    
    for(var frame = 0; frame < 10; frame++){
      score += x.rolls[frameIndex] + x.rolls[frameIndex + 1];
      frameIndex += 2
    }
    return score 
  };
};
