const { countBy } = require("ramda")
class BowlingGame {
  constructor () {
    this.rolls = []
  }

  roll (roll) {
    this.rolls.push(roll);
    console.log (roll, this.rolls, this.rolls.length)
  }

  getScore () {
    var res = parseInt(0);
    var bowlIndex = parseInt(0);
    var framecount = 0; //count of the frames (zero based)
    var frametotal = 0; // total score so far on this frame
    var nextissecondofframe = false // boolean - true if next bowl is second of frame
    var nextbowlbonus = 0; // 0,1(if the last ball was a strike or spare )
    // 2 if both prewious bowls were strikes - flag as to how many bonuses on the next bowl
    var nextbutonebowlbonus = 0; // 0 or 1 flag as to how many bonuses on next-but-one-bowl
    // make it 1 if the bowl before was a strike
    for (let bowlIndex = 0; bowlIndex < this.rolls.length; bowlIndex++){
      var rollscore = this.rolls[bowlIndex]; //scorre for this roll
       // add bonuses first
      res += rollscore * nextbowlbonus;
      nextbowlbonus = nextbutonebowlbonus;
      nextbutonebowlbonus = 0;
       // now add main score
      if(framecount < 10){
        if (nextissecondofframe === false){ // first bowl of frame
          res += rollscore;
          console.log(res, rollscore)
          frametotal += rollscore;
          if(rollscore === 10){ // only if it's a strike
            nextbowlbonus += 1;
            nextbutonebowlbonus = 1;
            framecount += 1;
            frametotal = 0;
          }
          else {
            // not strike
            nextissecondofframe = true;
            }
        } else if (nextissecondofframe === true){//second bowl of frame
            res += rollscore;
            if(frametotal + rollscore === 10){
              nextbowlbonus += 1;
            }
            framecount += 1;
            frametotal = 0;
            nextissecondofframe = false
            }
          }
        }
    return res;
  }
}
module.exports = BowlingGame
