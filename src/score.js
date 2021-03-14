'use strict'; //i.e. enable hard-mode

function Score (name = "Sisyphus"){
  this.name = name;

  this.scorecard = {};
  for(var i = 1; i <= 10; i ++){
    this.scorecard[i] = []
  };

  this.totals = {};
  for(var i = 1; i <= 10; i ++){
    this.scorecard[i] = 0
  };
}


Score.prototype = {
  addScore: function (frame, score) {
    if (frame < 10){
      return this._addScoreMain(frame, score);
    }
    else{
      return this._addScore10(score);
    };
  },
  _addScoreMain: function (frame, score) {
    var nScores = this.scorecard[frame].push(score);  // the number of entries in the array
    if (nScores === 2){
      return 0;
    }
    return 10 - this._sum(this.scorecard[frame]);
  },
  _addScore10: function (score) {
    var options = {
      // going branchless, baby!
      // no nested ifs for this guy
      1: function (score) {return 10 - score * (score !== 10);},  // returns 10 - score if score doesn't equal 10, or 10 - 0 if score does equal 10
      2: function (sum) {var check10 = 10 * (sum === 10 | sum === 20); // returns 0 if the score is less then 10, or 10 if the scores is 10 or 20 (strike or two strikes)
      var checkSum = (20 - sum) * ( sum > 10 & sum < 20);   // returns 20 - sum if 10 < sum < 20 (note: this will only apply if there is a strike and then a roll that knocks less than 10 pins)
      return check10 + checkSum},
      // did I mention I'm on a low switch-case diet?
      3: function (sum) {return 0;}
    };

    var nScores = this.scorecard[10].push(score);   // the number of entries in the array
    var sumScores = this._sum(this.scorecard[10]);

    return options[nScores](sumScores);
    // this function almost 30 lines when I did it last week
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

Score.prototype = {
  total: function (frame = 10) {
    return this.totals;
  }
}