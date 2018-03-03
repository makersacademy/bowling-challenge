'use strict';

var Game = function() {};

Game.prototype = {

  bonusChecker(frames) {
    var l = frames.length;
    var [antepenult, penult, ult] = [frames[l - 3], frames[l - 2], frames[l -1]];
    if (l > 2 && this.isStrike(antepenult) && !this.hasBonus(antepenult) && this.isStrike(penult)) {
      antepenult.push(ult[0]);
      ult[1] ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && this.isStrike(penult) && !this.hasBonus(ult)) {
      ult[1] && ult[1] !== 10 ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && !this.hasBonus(penult) && this.isSpare(penult)) {
      penult.push(ult[0]);
    }
    return frames;
  },

  flattenAndSum(array) {
    array = array.reduce(function(acc, curr) {
      return acc.concat(curr);
    }, []);

    return array = array.reduce(function (acc, curr) {
      return acc + curr;
    });
  },

  addRollToFrame(frames, count, roll) {
    if (frames.length < 10 && !frames[count]) {
      frames[count] = [roll];
    } else if (frames.length < 10 && frames[count][0] + roll <= 10) {
      frames[count].push(roll);
    } else {
      frames[count] ? frames[count].push(roll) : frames[count] = [roll];
    }
    return frames;
  },

  completeFrameCheck(frames, count) {
    if (frames[count][0] === 10 || frames[count].length === 2) {
      frames = this.bonusChecker(frames);
      count ++;
    }
    return count;
  },

  frameTenCheck(frames, count) {
    if (frames[count].length === 3 || frames[count][0] + frames[count][1] < 10) {
    count ++;
    }
    return count;
  },

  isStrike(frames) {
    return frames[0] === 10 ? true : false;
  },

  isSpare(frames) {
    return frames[0] + frames[1] === 10 ? true : false;
  },

  hasBonus(frames) {
    return frames.length === 3;
  }
}
