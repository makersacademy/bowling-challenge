function BowlingScorecard() {
  this.playerName;
  this.scores = {};
    // frame1: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame2: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame3: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame4: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame5: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame6: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame7: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame8: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame9: {bowl1:'', bowl2:'', bonus:'', totalScore:0},
    // frame10: {bowl1:'', bowl2:'', bowl3:'', bonus:'', totalScore:0}

  this.frameTracker = [1,1];
}
BowlingScorecard.prototype.enterPlayer = function (name) {
  this.playerName = name;
};
BowlingScorecard.prototype.enterBowl = function (score) {
  frame = 'frame' + this.frameTracker[0];
  bowl = 'bowl' + this.frameTracker[1];
  if (this.isFirstBowl()) {
    if (this.isStrike(score)){ //strike
      this.scores[frame] = {[bowl]:score, bonus:'strike'};
      this.frameTracker[0]++;
    } else {
      this.scores[frame] = {[bowl]:score};
      this.frameTracker[1]++;
    }
  }
};
BowlingScorecard.prototype.isFirstBowl = function () {
  return this.frameTracker[1] === 1;
};
BowlingScorecard.prototype.isStrike = function (score) {
  return score == 10;
};
