function ScoreCard() {
  this.score = 0;
  this.currentFrame = 1;
  this.totalFrames = 10;
  this.maxFrames = 12;
  this.currentBowl = 1;
  this.isGameOver = false;
  this.frames = [];
  for (frameIndex=0; frameIndex <= this.maxFrames; frameIndex +=1 ) this.frames[frameIndex] = {
    bowl1: 0, 
    bowl2: 0, 
    score: 0,
    strike: false,
    spare: false,
  }
};

ScoreCard.prototype.hitPins = function(numberOfPins){
  if (this.currentBowl === 1) {
    this.frames[this.currentFrame].bowl1 = numberOfPins;
    this.currentBowl += 1
    if ((this.currentFrame === this.totalFrames + 1 & this.frames[this.totalFrames].spare === true) || (this.currentFrame === this.maxFrames)) {
      this.isGameOver = true;
    }
    if (numberOfPins === 10) {
      this.frames[this.currentFrame].strike = true;
      this.changeFrame();
    }

  } else if (this.currentBowl === 2 ) {
      this.frames[this.currentFrame].bowl2 = numberOfPins;
      if (this.frames[this.currentFrame].bowl1 + numberOfPins === 10) {
        this.frames[this.currentFrame].spare = true;
      }
      if ((this.currentFrame === this.totalFrames && this.frames[this.currentFrame].spare === false) || (this.currentFrame === this.totalFrames + 1)) {
        this.isGameOver = true
      }
      this.changeFrame();
    }
};

ScoreCard.prototype.changeFrame = function(){
  this.currentBowl = 1;
  this.currentFrame += 1;
};

ScoreCard.prototype.tallyFrameScore = function(){
  this.clearFrameScore();
  for (frameIndex=1; frameIndex <= this.totalFrames; frameIndex +=1) {
    this.frames[frameIndex].score += (this.frames[frameIndex].bowl1 + this.frames[frameIndex].bowl2);
    if (this.frames[frameIndex].spare === true) {
      this.frames[frameIndex].score += (this.frames[frameIndex + 1].bowl1);
    }
    else if (this.frames[frameIndex].strike === true) {
      this.frames[frameIndex].score += (this.frames[frameIndex + 1].bowl1);
      if (this.frames[frameIndex + 1].strike === true) {
        this.frames[frameIndex].score += (this.frames[frameIndex + 2].bowl1);
      }
      else {
        this.frames[frameIndex].score += (this.frames[frameIndex + 1].bowl2);
      }
    }
  }
};

ScoreCard.prototype.clearFrameScore = function(){
  for (frameIndex=1; frameIndex <= this.totalFrames; frameIndex+=1) {
    this.frames[frameIndex].score = 0;
  }
};

ScoreCard.prototype.tallyTotalScore = function(){
  this.score = 0;
  for (frameIndex=1; frameIndex <= this.totalFrames; frameIndex +=1) {
    this.score += this.frames[frameIndex].score;
  }
  return this.score;
};



