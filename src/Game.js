function Game() {
  this.cur_frame = 0;
  this.cur_roll = 0
  this.frameRecord = [];
  this.gameRecord = [];
  this.totalScore = 0;
  this.score;
  this.pinsDown;
}

Game.prototype.knockDown = function(pins) {
  this.pinsDown = 0;
  this.updateFrame();
  this.frameRecord.push(pins);
  if (this.isFrameEnd()) {
    for (var i=0; i<this.frameRecord.length; i++) {
      this.pinsDown += this.frameRecord[i];
    }
    this.gameRecord.push(this.frameRecord);
    this.frameRecord = [];
  }
  this.cur_roll += 1
  return this.pinsDown = pins; 
};

Game.prototype.updateFrame = function() {
  if (!this.frameRecord[0] && this.frameRecord[0]!==0){this.cur_frame++; this.cur_roll = 0};
};

Game.prototype.frameScore = function(frameNo) {
  this.score = 0;
  var index = frameNo - 1; // the index no of this frame in the gameRecord ary
  if (frameNo === 10) {this.finalFrScore()}
  if (this.isStrike(this.gameRecord[index])) {this.strikeBonus(index);}
  else {
    this.score += (this.gameRecord[(index)][0] + this.gameRecord[(index)][1]);
    if (this.score < 10) {this.score}
    else if (this.score === 10) {
      this.score += this.gameRecord[index+1][0]
    } 
  }
  return this.score;
};

Game.prototype.finalFrScore = function() {
  for (var i=0; i<this.gameRecord[9].length; i++) {
    this.score += this.gameRecord[9][i]
  }
};

Game.prototype.strikeBonus = function(index) {
  var nextFrame = this.gameRecord[index+1];
  var neNextFrame = this.gameRecord[index+2]
  if (nextFrame == undefined){return}
  (this.isStrike(nextFrame) && !nextFrame[1])? 
  this.score += 20 + neNextFrame[0] : this.score += 10 + nextFrame[0] + nextFrame[1]
};

Game.prototype.accumScore = function(frameNo) {
  return this.totalScore += this.frameScore(frameNo);
};

Game.prototype.isFrameEnd = function() {
  if (this.cur_frame < 10) {
    return (this.frameRecord[0] === 10 || this.frameRecord.length >= 2)
  }
  else if (this.cur_frame === 10 && (this.frameRecord[0] + this.frameRecord[1] < 10)) {
    return (this.frameRecord.length >= 2)
  }
  else if (this.cur_frame === 10){
    return (this.frameRecord.length >= 3)
  }
  else {throw new Error ("game ended")}
}

Game.prototype.isStrike = function(ary) {
  if (ary === undefined || ary[0] === undefined) {return false}
  else {return (ary[0] === 10)}
}