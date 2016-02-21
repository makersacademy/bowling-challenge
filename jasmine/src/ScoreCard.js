function ScoreCard(){
  this.show = {};
  this.frameNumber = 1;
  this.currentFrame = [];
}

ScoreCard.prototype.add = function(score){
  if (this.currentFrame.length === 1) {
    this.currentFrame.push(score); 
    console.log("expect this to be 8,1: " + this.currentFrame);
    var key = "Frame " + this.frameNumber;
    this.show[key] = this.currentFrame;
    this.frameNumber++;
    console.log("scorecard: " + this.show["Frame 1"]);

  } else {
this.currentFrame = [score];

  }
  console.log("scorecard: " + this.show["Frame 1"]);


};

ScoreCard.prototype.isFinished = function(){
  return (this.frameNumber === 11);
};
