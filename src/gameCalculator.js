'use strict';

var Bowling = function() {
  this.allFrames = [];
  this.frame = 0;
};

// TODO: Make frame checker to run before framCount ++ checks previous two frames
// if frame[0] is ten (-2) or total is ten (-1) and add self to it accordingly

Bowling.prototype = {
  score: function(scores) {
    this.createAllFramesArray(scores);
    var total = this.sum(this.allFrames);
    this.allFrames = [];
    return total;
  },

  createAllFramesArray: function(scores) {
    while (this.allFrames.length < 10) {
      if (scores[0] === 10) {
        this.buildStrikeFrame(scores);
      } else if (scores[0] + scores[1] === 10){
        this.buildSpareFrame(scores);
      } else {
        this.frame = scores.splice(0,2);
      }
      this.addFrameToAllFramesArray();
    }
  },

  buildStrikeFrame: function(scores) {
    this.frame = scores.splice(0, 1);
    this.frame.push(scores[0], scores[1]);
  },

  buildSpareFrame: function(scores) {
    this.frame = scores.splice(0,2);
    this.frame.push(scores[0]);
  },

  addFrameToAllFramesArray: function() {
    this.allFrames.push(this.sum(this.frame));
    this.frame = 0;
  },

  sum: function(arr) {
    arr = arr.reduce(function (acc, curr) {
      return acc + curr;
    });
    return arr;
  },

  // scorecard functions

  frameChecker(arr) {
    var l = arr.length
    if (l > 2 && arr[l-3][0] === 10 && !arr[l-3][2] && arr[l-2][0] === 10) {
      arr[l-3].push(arr[l-1][0]);
      arr[l-1][1] ? arr[l-2].push(arr[l-1][0], arr[l-1][1]) : arr[l-2].push(arr[l-1][0]);
    } else if (l > 1 && arr[l - 2][0] === 10 && arr[l-1].length < 3) {
      console.log("why have you forsaken me?")
      arr[l - 1][1] && arr[l-1][1] !== 10 ? arr[l-2].push(arr[l-1][0], arr[l-1][1]) : arr[l-2].push(arr[l-1][0]);
    } else if (l > 1 && !arr[l-2][2] && this.sum(arr[l-2]) === 10) {
      arr[l-2].push(arr[l-1][0]);
    }
    return arr;
  },

  flattenAndSum(arr) {
    return this.sum(arr.reduce(function(a, b) {
      return a.concat(b);
    }, []));
  },

  addRollToFrame(arr, index, score) {
    if (!arr[index]) {
      arr[index] = [score];
    } else if (arr[index][0] + score <= 10) {
      arr[index].push(score);
    }
    return arr;
  },

  addRollToFrameTen(arr, index, score) {
    if (!arr[index]) {
      arr[index] = [score];
    } else {
      arr[index].push(score);
    }
    return arr;
  },
}
