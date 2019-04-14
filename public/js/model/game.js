function Game() {
  this.rollHistory = {
    1: [], 2: [] , 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11:[]
  };
  this.scoreCard = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
  };
  this.cumulativeScore = {
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
  };
  this.insult = "Are you kidding me pandejo? Nobody f***s with the Jesus!"
};

Game.prototype.roll = function (score) {
  for (var i = 1; i <= 11; i++) {
    if (this._isNormalFrame(i)) {
      if (this._isLegalRoll(i, score)) {
        this.rollHistory[i].push(score);
        this.insult = this._randomInsult()
      } else {
        this.insult = "You are a filthy cheater cabrón! Enter a valid score."
      };
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
    if (this.rollHistory[i][0] === 10 && (nextTwoFrames[0] + nextTwoFrames[1])) {
      this.scoreCard[i] += (nextTwoFrames[0] + nextTwoFrames[1]);
    } else if (this.rollHistory[i][0] + this.rollHistory[i][1] === 10 && nextTwoFrames[0]) {
      this.scoreCard[i] += nextTwoFrames[0]
    };
  };
  if (this.rollHistory[10][0] === 10 && this.rollHistory[11][1]) {
    this.scoreCard[10] += (this.rollHistory[11][0] + this.rollHistory[11][1]);
  } else if (this.rollHistory[10][0] + this.rollHistory[10][1] === 10 && this.rollHistory[11][0]) {
    this.scoreCard[10] += this.rollHistory[11][0];
  };
  return this.scoreCard
};

Game.prototype.accumulate = function () {
  var scoreAccumulation = 0
  for (var i = 1; i <= 10; i++) {
    scoreAccumulation += this.scoreCard[i];
    if (this.scoreCard[i] != "") {
      this.cumulativeScore[i] = ' : ' + scoreAccumulation;
    };
  };
  return this.cumulativeScore;
};

Game.prototype._isNormalFrame = function (frame) {
  return (this._isIncompleteFrame(frame) &&
          this._isNotStrikeFrame(frame) &&
          this._isNotBonusFrame(frame));
};

Game.prototype._isBonusRoll = function (frame) {
  return (this._isEleventhFrame(frame) &&
          this._isFollowingTwoRollFrame(frame) &&
          this._isFollowingSpare(frame) &&
          this._isEmptyFrame(frame));
};

Game.prototype._isBonusFrame = function (frame) {
  return (this._isEleventhFrame(frame) &&
          this._isFollowingStrike(frame) &&
          this._isIncompleteFrame(frame));
};

Game.prototype._isIncompleteFrame = function (frame) {
  return (this.rollHistory[frame].length < 2);
};

Game.prototype._isNotStrikeFrame = function (frame) {
  return (this.rollHistory[frame][0] != 10);
};

Game.prototype._isNotBonusFrame = function (frame) {
  return (frame != 11);
};

Game.prototype._isEleventhFrame = function (frame) {
  return (frame === 11);
};

Game.prototype._isFollowingTwoRollFrame = function (frame) {
  return (this.rollHistory[frame - 1].length === 2);
};

Game.prototype._isFollowingSpare = function (frame) {
  return ((this.rollHistory[frame - 1][0] + this.rollHistory[frame - 1][1]) === 10);
};

Game.prototype._isFollowingStrike = function (frame) {
  return (this.rollHistory[frame - 1][0] === 10);
};

Game.prototype._isEmptyFrame = function (frame) {
  return (this.rollHistory[frame].length === 0);
};

Game.prototype._isLegalRoll = function (frame, score) {
  if (this._isEmptyFrame(frame)) {
    return true;
  } else {
    return (this.rollHistory[frame][0] + score <= 10);
  };
};

Game.prototype._randomInsult = function () {
  var insults = [
    "Dios mio, man. Liam and me, we're gonna f*** you up.",
    "You suck! And that's not 'just, like, my opinion man'.",
    "You think you're a big shot huh? Watch out - I own this place!",
    "You might fool the f***s in the league office, but you don't fool Jesus!",
    "Laughable, man! HA HA!",
    "Keep this up and I'm gonna pull the trigger till it goes click!",
    "HA HA HA! You call that bowling? I know eight year olds better than you!",
    "You said it, man. Nobody f***s with the Jesus."
  ]

  var rand = Math.random();
  rand *= insults.length;
  rand = Math.floor(rand);

  return insults[rand];
};
