var Scorecard = function() {
  this.frame = 1; /* initialises with frame number 0 */
  this.score = []; /* and empty array of scores */
  this.totalScore = 0 /* initialises total at 0 */
}

Scorecard.prototype.playerName = function(playerName){
  this.playerName = playerName;
};

Scorecard.prototype.addScore = function (score1, score2) {
  if (this.frame === 10) { throw 'Cannot exceed 10 frames.' } /* end @ 10th */
  // this.frameScore = [score1, score2]
  this.frameMax(score1, score2); /* error if frame total exceeds 10 */
  this.addBonus(score1, score2);
  this.score.push([score1, score2]); /* pushes score subarray to end of array */
  this.frame += 1; /* increases frame number by 1 */
};

Scorecard.prototype.frameMax = function(score1, score2) {
  if ((score1 + score2) > 10) {
    throw 'Cannot exceed 10.'}
    else {  this.totalScore += (score1 + score2);
    }
  }

  Scorecard.prototype.addBonus = function(score1, score2) {
    if (this.score.count > 0) {
      this.lastFrameScore = this.score.slice(-1)[0];
      if (this.lastFrameScore[0] === 10) {
        this.totalScore += (score1 + score2);
      } else if (this.lastFrameScore[0] + this.lastFrameScore[1] === 10) {
        this.totalScore += score1;
      }
    }
  };

Scorecard.prototype.total = function () {
    return this.totalScore; /* return total score */
};

// What IS frameScore? Is it a function, a variable, a function that just
// returns a variable? ATM it's hard to use in console - can call it once
// and it adds contents as array to score array, but after that says it's
// not a function - does that mean it's actually just setting the contents of
// frameScore to whatever's inside it when it's called? In that case maybe
// it should be created inside addScore - frameScore = (score1, score2)


// var scorecard = new Scorecard();

// create variable for the user's frame number and then
// pass it into the addScore method which identifies which box
// in the table to put score in and increments the frame number?
// or could just create a variable for each score
// or even an input method for each score
// nah just one input method which I pass the frame number variable
// have a total for each frame or pass individual scores to the table
// display roll1 and roll2
// table with a score1 and score2 row, and items added accordingly
// by being set equivalent to variables?
