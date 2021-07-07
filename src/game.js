
function Game() {

  this.rolls=1;
  this.pins=[]; //points in each frame [5,5]


  this.roll = function(amountOfHitPins) {
    this.pins.push(amountOfHitPins)
  };

  this.score= function(){
    var totalScore=0;
    var rollNumber = 0;

    for (var frame=0; frame < 10; frame ++){
      //if the player hits a spare
      if (this.pins[rollNumber]+ this.pins[rollNumber + 1] == 10) {
        totalScore += this.pins[rollNumber] + this.pins[rollNumber+1]+ this.pins[rollNumber + 2];
      } else { //calclulates for an avarage score
      totalScore += this.pins[rollNumber] + this.pins[rollNumber+1];
      //10     += [7,on the first roll]+[3 on the second roll]
    }
    rollNumber+=2
  }
    return totalScore
  }




}
