var Game = function(score = 0, frameno = 1, rollno = 1, rollscore = 0) {

  this.score = score;
  // this.frameNo = frameno
  // this.rollNo = rollno
  this.rollScore = rollscore
  this.frame1Score = framescore

  this.score = function(frame) {

  };

  this.firstRollScore = function() {
    firstrollscore = Math.floor(Math.random() * 11)
    return firstrollscore
  };

  this.secondRollScore = function() {
    secondrollscore = Math.floor(Math.random() * (11-firstrollscore))
    return secondrollscore
  };

  this.frameScore = function() {
    framescore = firstrollscore + secondrollscore
    return framescore
  };

  this.currentRunningTotal = function() {
    runningTotal = 
  };

  this.finalScore = function() {
    if (score == 0 && frame == 10) {
      return 'Your total score is 0- GUTTER GAME!';
    };
  };

};

