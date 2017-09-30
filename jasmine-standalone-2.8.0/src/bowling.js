function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.allScores = [];
}

Bowling.prototype.currentScore = function(){
  return this.score;
};

Bowling.prototype.roll = function(number) {
  this.score += number;
  this.allScores.push(number);
  if (number === 10) {
    this.allScores.push("-");
  }
};

Bowling.prototype.allRolls = function() {
  return this.allScores;
};


  // Bowling.prototype.play = function(number, number) {
  //   var rolls = 20
  //
  //   for (var i = 0; i < rolls; i++) {
  //     self.roll();
  //     if(number === 10){break;}
  //   }
  // };
  //
  // var obj = {};
  // var name = "name";
  // var val = 2;
  // obj[name] = val;
  // console.log(obj);​
