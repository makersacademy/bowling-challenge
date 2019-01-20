function Game() {
  this.allFrames = [];
  this.framesScores = [];
  this.overallScore = 0;
};

Game.prototype.addFrameScore = function(framescore) {
  this.framesScores.push(framescore);
};

Game.prototype.calculateOverallScore = function() {
  for (let i in this.framesScores) {
    this.overallScore += this.framesScores[i];
  }
  return this.overallScore;
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

// Get.prototype.calculateBonus = function(allFramesRolls) {
//
// }
