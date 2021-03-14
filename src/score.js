'use strict'; //i.e. enable hard-mode

function Score (name = "Sisyphus"){
  this.name = name;

  this.scorecard = {};
  
  for(var i = 1; i <= 10; i ++){
    this.scorecard[i] = []
  }
}


Score.prototype = {
  addScore: function (frame, score) {
    var nScores = this.scorecard[frame].push(score);
    if (nScores === 2){
      return 0;
    }
    return 10 - this._sum(this.scorecard[frame]);
  },
  _sum: function (arr) {
    var count = 0;
    var i;
    for(i of arr){
      count += i;
    };
    return count;
  }
}