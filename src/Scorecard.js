var Scorecard = function(){
this.runningTotal = null;
this.frameTotal = null;
this.rolls = [];

};

Scorecard.prototype.roll = function(roll1, roll2){
  if (this.rolls.length > 10){throw new Error("You cannot play more than 10 frames!");};
  if(roll1 > 10){throw new Error("can't score more than 10!");};
  if(roll2 > 10){throw new Error("can't score more than 10!");};

  var roll_total = [roll1+roll2];

  if(roll_total[0] > 10) {throw new Error("You cannot score more than 10 from two rolls!");};

  this.rolls.push(roll_total);

};
