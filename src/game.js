'use strict';

var Game = function() {};

Game.prototype = {

  sum: function(arr) {
    arr = arr.reduce(function (acc, curr) {
      return acc + curr;
    });
    return arr;
  },

  frameChecker(arr) {
    var l = arr.length;
    var [antepenult, penult, ult] = [arr[l - 3], arr[l - 2], arr[l -1]];
    if (l > 2 && this.isStrike(antepenult) && !this.hasBonus(antepenult) && this.isStrike(penult)) {
      antepenult.push(ult[0]);
      ult[1] ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && this.isStrike(penult) && !this.hasBonus(ult)) {
      ult[1] && ult[1] !== 10 ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && !this.hasBonus(penult) && this.isSpare(penult)) {
      penult.push(ult[0]);
    }
    return arr;
  },

  flattenAndSum(arr) {
    return this.sum(arr.reduce(function(acc, curr) {
      return acc.concat(curr);
    }, []));
  },

  addRollToFrame(arr, index, score) {
    if (arr.length < 10 && !arr[index]) {
      arr[index] = [score];
    } else if (arr.length < 10 && arr[index][0] + score <= 10) {
      arr[index].push(score);
    } else {
      arr[index] ? arr[index].push(score) : arr[index] = [score];
    }
    return arr;
  },

  completeFrameCheck(arr, index) {
    if (arr[index][0] === 10 || arr[index].length === 2) {
      arr = this.frameChecker(arr);
      index ++;
    }
    return index;
  },

  frameTenCheck(arr, index) {
    if (arr[index].length === 3 || arr[index][0] + arr[index][1] < 10) {
    index ++;
    }
    return index;
  },

  isStrike(arr) {
    return arr[0] === 10 ? true : false;
  },

  isSpare(arr) {
    return arr[0] + arr[1] === 10 ? true : false;
  },

  hasBonus(arr) {
    return arr.length === 3;
  }
}
