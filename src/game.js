'use strict';

var frame;

var Game = function() {
  frame = new Frame();
};


Game.prototype = {

  bonusChecker(frames) {
    var l = frames.length;
    var [antepenult, penult, ult] = [frames[l - 3], frames[l - 2], frames[l -1]];
    if (l > 2 && this.frame.isStrike(antepenult) && !this.frame.hasBonus(antepenult) && this.frame.isStrike(penult)) {
      antepenult.push(ult[0]);
      ult[1] ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && this.frame.isStrike(penult) && !this.frame.hasBonus(ult)) {
      ult[1] && ult[1] !== 10 ? penult.push(ult[0], ult[1]) : penult.push(ult[0]);
    } else if (l > 1 && !this.frame.hasBonus(penult) && this.frame.isSpare(penult)) {
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
    if (count < 9 && !frames[count]) {
      frames[count] = [roll];
    } else if (count < 9) {
      frames[count].push(roll);
    } else if (count === 9) {
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
}
