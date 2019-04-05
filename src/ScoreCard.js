
function Score() {
  this.currentScore = 0
  // this.currentFrame = 0
};

// Score.prototype.total = function(){ return this.currentScore; };

Score.prototype.add = function(go1, go2) {
  this.currentScore += (go1 + go2);
};

// Score.prototype.currentBowl = function(go1, go2) {
//   this.currentFrame += (go1 + go2);
