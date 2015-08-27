var ScoreCard = function(){
  this.sumTotal = 0;    //endresult
  this.indRoll = 0;     //each rolls
  this.frameTotal = 0;  //round result (roll1+roll2)
};

ScoreCard.prototype.regRolls = function(roll1, roll2){
  this.frameTotal = roll1 + roll2;
  if(roll1 > 10){throw new Error("wrong number!");};
  if(roll2 > 10){throw new Error("wrong number!");};
  if(this.frameTotal > 10){throw new Error("that is too much!");};
}
