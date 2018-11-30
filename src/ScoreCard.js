function ScoreCard () {
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsKnockedDown = [ [],[],[],[],[],[],[],[],[],[] ];
  this.strikeOrSpare = null;
}

ScoreCard.prototype.addScore = function() {
  this.pinsKnockedDown[this.frameNumber-1].push(arguments[0]);
  if (this.rollNumber == 1) {
    this.rollNumber ++;
  } else {
    this.frameNumber ++;
    this.rollNumber = 1;
  }
}
