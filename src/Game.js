function Game() {
  this.allFrames = [];
  this.framesScores = [];
  this.overallScore = 0;
};

// example list_of_scores = [3,5,10,5,5,3,5,6,2,2,3,5,4,7,1,7,1,6,2]

Game.prototype.loadFrames = function(list_of_scores) {
  while (list_of_scores.length != 0) {
    frame = new Frame();
    frame.roll(list_of_scores.shift());
      if (!frame.isComplete()) {
        frame.roll(list_of_scores.shift());
      };
    this.allFrames.push(frame);
  };
  return this.allFrames;
};

// iterate through the Frames and calculate the score per frame

Game.prototype.calculateScores = function() {
   for (i = 0; i < 10; i++) {
     var current_frame = this.allFrames[i];
     var next_frame = this.allFrames[i+1];
     var next_next_frame = this.allFrames[i+2];
     var score = 0;
     if (current_frame.isStrike() && i!=9) {
        if (next_frame.isStrike()) {
            if (next_next_frame.isStrike()) {
            score = current_frame.calculateScore() + next_frame.calculateScore() + next_next_frame.calculateScore();
            } else { score = current_frame.calculateScore() + next_frame.calculateScore() + next_next_frame.rolls[0] };
         } else { score = current_frame.calculateScore() + next_frame.calculateScore() };
      } else if (current_frame.isSpare() && i!=9) { score = current_frame.calculateScore() + next_frame.rolls[0];
      } else { score = current_frame.calculateScore() };
    this.framesScores.push(score);
   };
  return this.framesScores;
};

Game.prototype.calculateOverallScore = function() {
  for (i=0; i < this.framesScores.length; i++) {
    this.overallScore += this.framesScores[i];
  }
  return (this.overallScore + this.addExtraBonus());
};

Game.prototype.addExtraBonus = function() {
  if (this.allFrames[9].isStrike()) {
    return 20;
  } else if (this.allFrames[9].isSpare()) {
    return 10;
  };
  return 0;
};
