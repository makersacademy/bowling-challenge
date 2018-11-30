function BowlingScorecard() {
  this.playerName;
  this.scores = {};
  this.frameTracker = [1,1];
}
BowlingScorecard.prototype.enterPlayer = function (name) {
  this.playerName = name;
};
BowlingScorecard.prototype.enterBowl = function (score) {
  frame = 'frame' + this.frameTracker[0];
  if (this.isFirstBowl()) {
    if (this.isStrike(score)){ //strike
      this.scores[frame] = {bowl1:score, bonus:'strike'};
      this.updateFrameScore();
      this.frameTracker[0]++;
    } else { //first bowl, no strike
      this.scores[frame] = {bowl1:score};
      this.updateFrameScore();
      this.frameTracker[1]++;
    }
  } else if (this.isSpare(frame, score)) { //spare
    this.scores[frame]['bowl2'] = score;
    this.scores[frame]['bonus'] = 'spare';
    this.updateFrameScore();
    this.frameTracker=[this.frameTracker[0]+1,1];
  } else { //second bowl, no spare
    this.scores[frame]['bowl2'] = score;
    this.updateFrameScore();
    this.frameTracker=[this.frameTracker[0]+1,1];
  }
};
BowlingScorecard.prototype.updateFrameScore = function () {
  current_frame = 'frame' + this.frameTracker[0];
  last_frame = 'frame' + (this.frameTracker[0]-1);
  try {
    bonus = this.scores[last_frame]['bonus'];
  }
  catch(err) {
    bonus = 'none';
  }
    switch (bonus) {
      case 'strike':
        if (this.scores[current_frame]['bonus']){

        }
        this.scores[last_frame]['frameScore'] = this.scores[last_frame]['bowl1']
             + this.scores[current_frame]['bowl1'] + this.scores[current_frame]['bowl2'];
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
BowlingScorecard.prototype.isFirstBowl = function () {
  return this.frameTracker[1] === 1;
};
BowlingScorecard.prototype.isStrike = function (score) {
  return score == 10;
};
BowlingScorecard.prototype.isSpare = function (frame, score) {
  return this.scores[frame]['bowl1'] + score == 10;
};
