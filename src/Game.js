function Game() {
  this.rollHistory = {
    1: [], 2: [] , 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11:[]
  };
  this.scoreCard = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
  }

};

Game.prototype.roll = function (score) {
  for (var i = 1; i <= 11; i++) {
    if (this._isNormalFrame(i)) {
      this.rollHistory[i].push(score);
      break;
    } else if (this._isBonusRoll(i)) {
      this.rollHistory[i].push(score);
      break;
    } else if (this._isBonusFrame(i)) {
      this.rollHistory[i].push(score);
      break;
    };
  };
};

Game.prototype.score = function () {
  for (var i = 1; i <= 10; i++) {
    if (this.rollHistory[i].length === 2) {
      this.scoreCard[i] = this.rollHistory[i][0] + this.rollHistory[i][1];
    } else if (this.rollHistory[i][0] === 10) {
      this.scoreCard[i] = this.rollHistory[i][0];
    };
  };
  for (var i = 1; i <= 9; i++) {
    var nextTwoFrames = this.rollHistory[i + 1].concat(this.rollHistory[i + 2]);
    if (this.rollHistory[i][0] === 10) {
      this.scoreCard[i] += (nextTwoFrames[0] + nextTwoFrames[1]);
    } else if (this.rollHistory[i][0] + this.rollHistory[i][1] === 10) {
      this.scoreCard[i] += nextTwoFrames[0]
    };
  };
  if (this.rollHistory[10][0] === 10) {
    this.scoreCard[10] += (this.rollHistory[11][0] + this.rollHistory[11][1]);
  } else if (this.rollHistory[10][0] + this.rollHistory[10][1] === 10) {
    this.scoreCard[10] += this.rollHistory[11][0];
  };
};

Game.prototype.accumulate = function (frame) {
  var cumulativeScore = 0
  for (var i = 1; i <= frame; i++) {
    cumulativeScore += this.scoreCard[i];
  };
  return cumulativeScore;
};

Game.prototype._isNormalFrame = function (i) {
  return (this._isIncompleteFrame(i) &&
          this._isNotStrikeFrame(i) &&
          this._isNotBonusFrame(i));
};

Game.prototype._isBonusRoll = function (i) {
  return (this._isEleventhFrame(i) &&
          this._isFollowingTwoRollFrame(i) &&
          this._isFollowingSpare(i) &&
          this._isEmptyFrame(i));
};

Game.prototype._isBonusFrame = function (i) {
  return (this._isEleventhFrame(i) &&
          this._isFollowingStrike(i) &&
          this._isIncompleteFrame(i));
};

Game.prototype._isIncompleteFrame = function (i) {
  return (this.rollHistory[i].length < 2);
};

Game.prototype._isNotStrikeFrame = function (i) {
  return (this.rollHistory[i][0] != 10);
};

Game.prototype._isNotBonusFrame = function (i) {
  return (i != 11);
};

Game.prototype._isEleventhFrame = function (i) {
  return (i === 11);
};

Game.prototype._isFollowingTwoRollFrame = function (i) {
  return (this.rollHistory[i - 1].length === 2);
};

Game.prototype._isFollowingSpare = function (i) {
  return ((this.rollHistory[i - 1][0] + this.rollHistory[i - 1][1]) === 10);
};

Game.prototype._isFollowingStrike = function (i) {
  return (this.rollHistory[i - 1][0] === 10);
};

Game.prototype._isEmptyFrame = function (i) {
  return (this.rollHistory[i].length === 0);
};
