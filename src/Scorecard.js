var ScoreCard = function(){
  this.sumTotal = 0;    //endresult
  this.indRoll = 0;     //each rolls
  this.eachRoll = [];    //container of all rounds
  this.frameTotal = null;  //round result (roll1+roll2)
};

ScoreCard.prototype.regRolls = function(roll1, roll2){
  this.frameTotal = roll1 + roll2
  if(this.eachRoll.length > 10){throw new Error("no more rounds!");};
  if(roll1 > 10){throw new Error("wrong number!");};
  if(roll2 > 10){throw new Error("wrong number!");};

  var sumOfRolls = [roll1 + roll2];

  if(sumOfRolls[0] > 10){throw new Error("that is too much!");};

  this.eachRoll.push(sumOfRolls);
};
