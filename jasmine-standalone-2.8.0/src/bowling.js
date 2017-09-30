function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.allscores = [];
}


  Bowling.prototype.currentScore = function(){
    return this.score;
};

  Bowling.prototype.roll = function(number) {
    this.score += number;
};

  // Bowling.prototype.play = function(number) {
  //   for (var i = 0; i < 2; i++) {
  //     self.roll();
  //     if(this.lastball === 10){break;}
  //   }
  // };
