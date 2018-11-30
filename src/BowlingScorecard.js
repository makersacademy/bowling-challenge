function BowlingScorecard() {
  this.playerName;
  this.scores = {};
  this.frameTracker = [1,1];
}
BowlingScorecard.prototype.enterPlayer = function (name) {
  this.playerName = name;
};
BowlingScorecard.prototype.enterBowl = function (score) {
  this.updateScoresHash(score);
  this.updateFrameScore();
  this.updateframeTracker();
};
BowlingScorecard.prototype.updateScoresHash = function (score) {
  frame = 'frame' + this.frameTracker[0];
  if (this.isFirstBowl()) {
    if (this.isStrike(score)){ //strike
      this.scores[frame] = {bowl1:score, bonus:'strike'};
    } else { //first bowl, no strike
      this.scores[frame] = {bowl1:score};
    }
  } else if (this.isSpare(frame, score)) { //spare
    this.scores[frame]['bowl2'] = score;
    this.scores[frame]['bonus'] = 'spare';
  } else { //second bowl, no spare
    this.scores[frame]['bowl2'] = score;
  }
};
BowlingScorecard.prototype.updateFrameScore = function () {
  current_frame = 'frame' + this.frameTracker[0];
  last_frame = 'frame' + (this.frameTracker[0]-1);
  try {
    bonus = this.scores[last_frame]['bonus'];
  } catch(err) {
    bonus = 'none';
  }
    switch (bonus) {
      case 'strike':
      two_frames_prev = 'frame' + (this.frameTracker[0]-2);
        if (this.frameTracker[0] > 2 && this.scores[two_frames_prev]['bonus'] == 'strike') {
          this.scores[two_frames_prev]['frameScore'] = this.scores[two_frames_prev]['bowl1']
               + this.scores[last_frame]['bowl1'] + this.scores[current_frame]['bowl1'];
          } else if (this.scores[current_frame]['bonus'] != 'strike') {
            this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
             + this.scores[current_frame]['bowl1'] + this.scores[current_frame]['bowl2'];
        } //if current frame has a strike, do nothing this frame
        break;
      case 'spare':
        this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
             + this.scores[last_frame]['bowl2'] + this.scores[current_frame]['bowl1'];
        break;
      default:
        this.scores[current_frame]['frameScore'] = this.scores[current_frame]['bowl1']
          + this.scores[current_frame]['bowl2'];
    }
};
BowlingScorecard.prototype.updateframeTracker = function () {
  frame = 'frame' + this.frameTracker[0];
  if (this.isFirstBowl()) {
    if (this.scores[frame]['bowl1'] == 10){
      this.frameTracker[0]++;
    } else {
      this.frameTracker[1]++;
    }
  } else {
    this.frameTracker=[this.frameTracker[0]+1,1];
  }
};
BowlingScorecard.prototype.isFirstBowl = function () {
  return this.frameTracker[1] === 1;
};
BowlingScorecard.prototype.isStrike = function (score) {
  return score == 10;
};
BowlingScorecard.prototype.isSpare = function (frame, score) {
  return this.scores[frame]['bowl1'] + score == 10;
};
