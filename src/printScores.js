printScores = function() {
  console.log("Your score is " + this.runningTotal())
  var times = 10;
  for(var i=1; i <= times; i++){
    console.log("Frame " + i + ": " + this.frames[i-1].finalFrameScore)
  }
};
