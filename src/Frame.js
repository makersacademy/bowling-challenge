var Frame = function() {
  this.frameScore = 0;
  this.skittlesRemaining = 10;
};

Frame.prototype.play = function() {
  score = this.bowl();
  this.frameScore += score;
  this.skittlesRemaining -= score;
  if(this.skittlesRemaining === 0) {
    return 'Strike';
  }
  score = this.bowl();
  this.frameScore += score;
  this.skittlesRemaining -= score;
  if(this.skittlesRemaining === 0) {
    return 'Spare';
  } else {
    return '' + this.frameScore;
  }
};

Frame.prototype.bowl = function() {
  score = Math.floor(Math.random() * (this.skittlesRemaining + 1));
  this.frameScore += score;
  this.skittlesRemaining -= score;
  return score;
};

/* FXIME:                                           *
 * this.frameScore += score;                        *
 * this.skittlesRemaining -= score;                 *
 * get run in both play() and bowl() methods.       *
 * Removing them in bowl() passes tests because     *
 * frameScore will ALWAYS be 0, and                 *
 * skittlesRemaining will ALWAYS be 10.             *
 * However, removing them from play() results in    *
 * frameScore and skittlesRemaining not updating as *
 * this.frameScore += score;                        *
 * this.skittlesRemaining -= score;                 *
 * are circumvented by the spies.                   */
