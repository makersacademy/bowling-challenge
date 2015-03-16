var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
  this.before = 0;
  this.beforeBefore = 0;
  this.currentBowl = 0;
};

Scorecard.prototype.bowl = function(result) {
  this.currentBowl = result;
  this.currentFrame.push(result);
  if (this.allFrames.length == 10) { result = 0; this.currentBowl = 0; this.currentFrame = [];}
  this.strikeBonus();
  this.spareBonus();
  if (this.allFrames.length < 9) {
    if (result == 10) { this.allFrames.push([10]); this.currentFrame = []; }
    if (this.currentFrame.length == 2) {
      this.allFrames.push([this.currentFrame[0] + this.currentFrame[1]]);
      this.currentFrame = [];
    }
  }
  if (this.allFrames.length == 9) {
    if ((this.currentFrame.length == 2) && ((this.currentFrame[0] + this.currentFrame[1]) < 10)) { this.allFrames.push([this.currentFrame[0] + this.currentFrame[1]])};
    if (this.currentFrame.length == 3) { this.allFrames.push([this.currentFrame[0] + this.currentFrame[1] + this.currentFrame[2]])};
    if (this.currentFrame.length > 3) throw new "The game is over";
  }
  this.beforeBefore = this.before;
  this.before = result;
};

Scorecard.prototype.strikeBonus = function() {
  if ((this.before == 10)&&(this.currentFrame.length < 3)) { this.allFrames[this.allFrames.length - 1][0] += this.currentBowl; }
  if ((this.beforeBefore == 10) && (this.before != 10)) { this.allFrames[this.allFrames.length - 1][0] += this.currentBowl; }
  if ((this.beforeBefore == 10) && (this.before == 10) && (this.currentFrame.length < 2)) { this.allFrames[this.allFrames.length - 2][0] += this.currentBowl; }
};

Scorecard.prototype.spareBonus = function(){
  if ((this.currentFrame.length == 1) && (this.before + this.beforeBefore == 10) && ((this.before || this.beforeBefore) != 10)) { this.allFrames[this.allFrames.length - 1][0] += this.currentBowl; }
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};

Scorecard.prototype.scoreTotal = function() {
  var total = 0;
  var len = this.allFrames().length;
  for (i=0; i<len; i ++) {
    total += this.allFrames[i];
  }
};