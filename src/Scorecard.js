var Scorecard = function(){
this.runningTotal = null;
this.rolls = [];
this.frameTotals = []
};

Scorecard.prototype.roll = function(roll1, roll2){
  if (this.rolls.length > 10){throw new Error("You cannot play more than 10 frames!");};
  if(roll1 > 10){throw new Error("can't score more than 10!");};
  if(roll2 > 10){throw new Error("can't score more than 10!");};
  if((roll1+roll2) > 10) {throw new Error("You cannot score more than 10 from two rolls!");};
  this.rolls.push([roll1,roll2]);
};
// f = frame , r = roll
Scorecard.prototype.frameTotal = function(i){
  var f1r1 = (this.rolls[i-1][0]);
  var f1r2 = (this.rolls[i-1][1]);
  if(this.rolls.length > 1) {
    var f2r1 = (this.rolls[i][0]);
    var f2r2 = (this.rolls[i][1]);
  }

  var total = (f1r1 + f1r2);

  // this is function when we get spare & strike
  if((f1r1 || f1r2) === 10) {
    return total += (f2r1 + f2r2);
  } else if(total === 10) {
      return total += f2r1;
  } else {
    return total;
  }

};
