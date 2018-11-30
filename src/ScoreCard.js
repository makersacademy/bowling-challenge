function ScoreCard () {
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsKnockedDown = [ [],[],[],[],[],[],[],[],[],[] ];
  this.strikeOrSpare = null;
};

ScoreCard.prototype.addScore = function() {
  this.pinsKnockedDown[this.frameNumber-1].push(arguments[0]);
  if (this.rollNumber == 1) {
    this.rollNumber ++;
  } else {
    this.frameNumber ++;
    this.rollNumber = 1;
  };
};

ScoreCard.prototype.sumOfPins = function () {
  var score = 0;
  for (var i = 0; i < 10; i++) {
    score += this.pinsKnockedDown[i].reduce(function(a,b) {
      return a + b
    });
  };
  return score;
};
