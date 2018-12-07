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
};
BowlingScorecard.prototype.updateScoresHash = function (score) {
  frame = 'frame' + this.frameTracker[0];
  bowl = 'bowl' + this.frameTracker[1];
  if (this.isFirstBowl()) {
    if (score == 10){ //strike
      this.scores[frame] = {bowl1:score, bonus:'strike'};
    } else { //first bowl, no strike
      this.scores[frame] = {bowl1:score};
    }
  } else if (this.isSpare(frame, score)) { //spare
    this.scores[frame][bowl] = score;
    this.scores[frame]['bonus'] = 'spare';
  } else { //second bowl, no spare
    this.scores[frame][bowl] = score;
  }
  this.updateFrameScore();
};
BowlingScorecard.prototype.updateFrameScore = function () {
  current_frame = 'frame' + this.frameTracker[0];
  last_frame = 'frame' + (this.frameTracker[0]-1);
  try { last_frame_bonus = this.scores[last_frame]['bonus']
} catch { last_frame_bonus = 'none';
}
  if (last_frame_bonus == 'strike'){
        this.calculateStrikeBonus(current_frame, last_frame);
  } else if (last_frame_bonus == 'spare') {
    this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
         + this.scores[last_frame]['bowl2'] + this.scores[current_frame]['bowl1'];
  } else if (this.frameTracker[0] > 1){
    this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
      + this.scores[last_frame]['bowl2'];
  }
  if (this.frameTracker[0] == 10 && this.frameTracker[1] >= 2){
      if (this.scores['frame10']['bonus'] != 'spare'){
        this.scores['frame10']['frameScore'] = this.scores['frame10']['bowl1']
          + this.scores['frame10']['bowl2'];
      } else if (this.scores['frame10']['bowl3'] != undefined ){
        this.scores['frame10']['frameScore'] = this.scores['frame10']['bowl1']
          + this.scores['frame10']['bowl2'] + this.scores['frame10']['bowl3'];
      }
    }
    this.updateframeTracker();
};
BowlingScorecard.prototype.updateframeTracker = function () {
  frame = 'frame' + this.frameTracker[0];
  if (this.isFirstBowl()) {
    if (this.scores[frame]['bowl1'] == 10){
      this.frameTracker[0]++;
    } else {
      this.frameTracker[1]++;
    }
  } else if (this.frameTracker[0] < 10) {
    this.frameTracker=[this.frameTracker[0]+1,1];
  } else if (this.scores['frame10']['bonus'] == 'spare') {
    this.frameTracker[1]++;
  }
};
BowlingScorecard.prototype.calculateStrikeBonus = function (current_frame, last_frame) {
  two_frames_prev = 'frame' + (this.frameTracker[0]-2);
  if (this.frameTracker[0] > 2 && this.isStrike(two_frames_prev)) {
    this.scores[two_frames_prev]['frameScore'] = this.scores[two_frames_prev]['bowl1']
         + this.scores[last_frame]['bowl1'] + this.scores[current_frame]['bowl1'];
    } else if (!this.isStrike(current_frame)) {
      this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
       + this.scores[current_frame]['bowl1'] + this.scores[current_frame]['bowl2'];
  } //if current frame has a strike, do nothing this frame
};
BowlingScorecard.prototype.isFirstBowl = function () {
  return this.frameTracker[1] === 1;
};
BowlingScorecard.prototype.isStrike = function (frame) {
  return this.scores[frame]['bonus'] == 'strike';
};
BowlingScorecard.prototype.isSpare = function (frame, score) {
  return this.scores[frame]['bowl1'] + score == 10;
};
