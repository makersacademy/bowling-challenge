var Scorecard = function(){
  this.frameScore = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
                     6: 0, 7: 0, 8: 0, 9: 0, 10: 0};
  this.frameTries = 1;
  this.currentFrame = 1;
}

Scorecard.prototype = {
  calculateScore: function(score){
    this.frameScore[this.currentFrame] += score;
    this.frameTries++;
  },

  calculateFrame: function(){
    if (this.frameTries === 2){
      this.currentFrame++
      this.frameTries = 1;
    }
  }
}
