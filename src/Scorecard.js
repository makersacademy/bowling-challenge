var Scorecard = function(){
this.runningTotal = null;
this.frameTotal = null;
};

Scorecard.prototype.roll = function(roll1, roll2){
  if(roll1 > 10){throw new Error("can't score more than 10!");};
  if(roll2 > 10){throw new Error("can't score more than 10!");};

  var roll_total = roll1+roll2

  if (roll_total === 10) {
    this.frameTotal
  } else {
    this.frameTotal = roll_total;
  };

};
