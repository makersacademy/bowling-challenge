var Scorecard = function(){
  // this.score = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  //               6: 0, 7: 0, 8: 0, 9: 0, 10: 0};
  this.score = {1: [0,0], 2: [0,0], 3: [0,0], 4: [0,0], 5: [0,0],
                6: [0,0], 7: [0,0], 8: [0,0], 9: [0,0], 10: [0,0]};
  this.frameTries = 0;
  this.currentFrame = 1;
}

Scorecard.prototype = {
  addScore: function(score){
    if (score === 10){
      this.score[this.currentFrame] = [10,0];
      this.nextFrame();
    }
    else {
      this.score[this.currentFrame][this.frameTries] += score;
      this.frameTries++;
      this.calculateFrame();
    }
  },

  calculateScore: function(frame){
    if (this.score[frame] === [10,0]){
      calculateStrike();
    }
    return this.score[frame].reduce((a, b) => a + b, 0);
  },

  calculateFrame: function(){
    if (this.frameTries > 1){
      this.nextFrame();
    }
  },

  calculateStrike: function(){
    this.score[this.currentFrame - 2].concat(this.score[this.currentFrame - 1]);
  },

  calculateSpare: function(){
    this.score[this.currentFrame -2].concat(this.score[this.currentFrame - 1][0]);
  },

  nextFrame: function(){
    this.currentFrame++
    this.frameTries = 0;
  }
}
